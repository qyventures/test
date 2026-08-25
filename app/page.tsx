import { benchmarkSeed, qyRoamDailyPrice } from '../lib/pricing';

export default function Home() {
  return (
    <main style={{fontFamily:'Arial, sans-serif',maxWidth:1120,margin:'0 auto',padding:'32px 20px'}}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:20}}>
        <div><strong style={{fontSize:28}}>QY Roam</strong><div style={{color:'#555'}}>Stay connected wherever you go.</div></div>
        <a href="https://wa.me/6580327183" style={{textDecoration:'none'}}>WhatsApp +65 8032 7183</a>
      </header>
      <section style={{padding:'72px 0 36px'}}>
        <h1 style={{fontSize:52,lineHeight:1.05,maxWidth:800}}>Pocket Wi‑Fi for your trip, priced to beat comparable Yoowifi rates by at least 3%.</h1>
        <p style={{fontSize:20,color:'#555',maxWidth:760}}>Choose a destination and travel dates. We courier the device to you in Singapore; after your trip, return it using the provided return method.</p>
      </section>
      <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:14,marginBottom:40}}>
        <label>Destination<select style={{width:'100%',padding:12,marginTop:6}} defaultValue="Japan">{benchmarkSeed.map(x=><option key={x.country}>{x.country}</option>)}</select></label>
        <label>Start date<input type="date" style={{width:'100%',padding:12,marginTop:6}} /></label>
        <label>End date<input type="date" style={{width:'100%',padding:12,marginTop:6}} /></label>
        <button style={{padding:14,border:0,borderRadius:8,fontWeight:700,alignSelf:'end'}}>Search plans</button>
      </section>
      <h2>Launch pricing</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:16}}>
        {benchmarkSeed.map(x => <article key={x.country} style={{border:'1px solid #ddd',borderRadius:12,padding:18}}><div style={{fontWeight:700}}>{x.country}</div><div style={{fontSize:28,margin:'8px 0'}}>S${qyRoamDailyPrice(x.competitorDaily).toFixed(2)}<small style={{fontSize:14}}>/day</small></div><div style={{color:'#666',fontSize:13}}>Benchmark: S${x.competitorDaily.toFixed(2)}/day</div></article>)}
      </div>
      <section style={{padding:'44px 0'}}><h2>How it works</h2><p>1. Book your destination and dates. 2. QY Roam couriers the device to your Singapore address. 3. Travel and connect multiple devices. 4. Return the device after your trip using the supplied return instructions.</p></section>
      <footer style={{borderTop:'1px solid #eee',paddingTop:24,color:'#666'}}>Operated by QY Venture Pte. Ltd. · Customer support +65 8032 7183</footer>
    </main>
  );
}
