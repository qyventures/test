create extension if not exists pgcrypto;

create table if not exists destinations (
  id uuid primary key default gen_random_uuid(),
  country text not null unique,
  competitor_daily numeric(10,2),
  qy_daily numeric(10,2) not null,
  active boolean not null default true,
  updated_at timestamptz not null default now()
);

create table if not exists devices (
  id uuid primary key default gen_random_uuid(),
  serial_no text unique not null,
  status text not null default 'available' check (status in ('available','allocated','out','return_pending','maintenance','lost')),
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  order_no text unique not null,
  customer_name text not null,
  email text not null,
  phone text not null,
  destination text not null,
  start_date date not null,
  end_date date not null,
  rental_days int not null check (rental_days > 0),
  daily_rate numeric(10,2) not null,
  delivery_fee numeric(10,2) not null default 0,
  return_fee numeric(10,2) not null default 0,
  total numeric(10,2) not null,
  payment_status text not null default 'pending' check (payment_status in ('pending','paid','failed','refunded')),
  fulfilment_status text not null default 'new' check (fulfilment_status in ('new','packed','courier_booked','delivered','return_pending','returned','closed')),
  stripe_checkout_session_id text,
  device_id uuid references devices(id),
  delivery_address text not null,
  return_tracking text,
  created_at timestamptz not null default now()
);

create table if not exists competitor_prices (
  id uuid primary key default gen_random_uuid(),
  competitor text not null default 'Yoowifi',
  destination text not null,
  daily_price numeric(10,2) not null,
  source_url text,
  checked_at timestamptz not null default now()
);
