
import Province from './Province'


function sampleProvinceData(){
  return {
    name:"Asia",
    producers:[
      {name:"Byzantium",cost:10,production:9},
      {name:"Attalia",cost:12,production:10},
      {name:"Sinope",cost:10,production:6}
    ],
    demand:30,
    price:20
  };
}


describe('province',()=>{
  let asia

  beforeEach(() => {
    asia=new Province(sampleProvinceData())
  });

  test('shortfall', () => {
    // const asia=new Province(sampleProvinceData())
    expect(asia.shortfall).toBe(5);
  })

  test('profit', () => {
    // const asia=new Province(sampleProvinceData())
    expect(asia.profit).toBe(230);
  })

  test('change production', () => {
    asia.producers[0].production=20;
    expect(asia.shortfall).toBe(-6);
    expect(asia.profit).toBe(292);
  })
  
  // 测试边界条件
  test('zero demand', () => {
    asia.demand=0;
    expect(asia.shortfall).toBe(-25);
    expect(asia.profit).toBe(0);
  })

  test('negative demand', () => {
    asia.demand=-1;
    expect(asia.shortfall).toBe(-26);
    expect(asia.profit).toBe(-10);
  })

  test('empty string demand', () => {
    asia.demand="";
    expect(asia.shortfall).toBeNaN();
    expect(asia.profit).toBeNaN();
  })

})

describe('no producers',()=>{
  let noProducers;

  beforeEach(() => {
    const data={
      name:"No produducers",
      producers:[],
      demand:30,
      price:20
    }
    noProducers=new Province(data);
  });

  test('shortfall', () => {
    expect(noProducers.shortfall).toBe(30);
  })

  test('profit', () => {
    expect(noProducers.profit).toBe(0);
  })

  
})

// describe('no producers',()=>{
//   test('', () => {
//     const data={
//       name:"String for producers",
//       producers:"",
//       demand:30,
//       price:20
//     }
//     const prov=new Province(data);
//     expect(prov.shortfall).toBe(0);
//   })
// })
