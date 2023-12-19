const puppeteer=require('puppeteer')

const url='https://leetcode.com/akashbhandari0101/'

async function fun(){
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    await page.goto('https://leetcode.com/akashbhandari0101/',{ viewport: { width: 1280, height: 720 }})

    const generalInfo=await page.evaluate(()=>{
        const userName=document.querySelector("#__next > div.flex.min-h-screen.min-w-\\[360px\\].flex-col.text-label-1.dark\\:text-dark-label-1.bg-layer-bg.dark\\:bg-dark-layer-bg > div.mx-auto.w-full.grow.p-4.md\\:mt-0.md\\:max-w-\\[888px\\].md\\:p-6.lg\\:max-w-screen-xl.mt-\\[50px\\] > div > div:nth-child(1) > div > div.text-label-2.dark\\:text-dark-label-2.flex.flex-col.space-y-4 > div > div.flex.flex-col > div:nth-child(1) > div")
        const email=document.querySelector("#__next > div.flex.min-h-screen.min-w-\\[360px\\].flex-col.text-label-1.dark\\:text-dark-label-1.bg-layer-bg.dark\\:bg-dark-layer-bg > div.mx-auto.w-full.grow.p-4.md\\:mt-0.md\\:max-w-\\[888px\\].md\\:p-6.lg\\:max-w-screen-xl.mt-\\[50px\\] > div > div:nth-child(1) > div > div.text-label-2.dark\\:text-dark-label-2.flex.flex-col.space-y-4 > div > div.flex.flex-col > div:nth-child(2) > div.text-label-3.dark\\:text-dark-label-3.text-xs")
        const rank=document.querySelector("#__next > div.flex.min-h-screen.min-w-\\[360px\\].flex-col.text-label-1.dark\\:text-dark-label-1.bg-layer-bg.dark\\:bg-dark-layer-bg > div.mx-auto.w-full.grow.p-4.md\\:mt-0.md\\:max-w-\\[888px\\].md\\:p-6.lg\\:max-w-screen-xl.mt-\\[50px\\] > div > div:nth-child(1) > div > div.text-label-2.dark\\:text-dark-label-2.flex.flex-col.space-y-4 > div > div.flex.flex-col > div.flex.flex-1.items-end.space-x-\\[5px\\].text-base > span.ttext-label-1.dark\\:text-dark-label-1.font-medium")
        const mostUsedLang=document.querySelector("#__next > div.flex.min-h-screen.min-w-\\[360px\\].flex-col.text-label-1.dark\\:text-dark-label-1.bg-layer-bg.dark\\:bg-dark-layer-bg > div.mx-auto.w-full.grow.p-4.md\\:mt-0.md\\:max-w-\\[888px\\].md\\:p-6.lg\\:max-w-screen-xl.mt-\\[50px\\] > div > div:nth-child(1) > div > div.mt-4.flex.flex-col.space-y-3 > div:nth-child(1) > div.text-xs > span")

        console.log(userName,email,rank,mostUsedLang)
        console.log(123);
    })
    
}

fun()