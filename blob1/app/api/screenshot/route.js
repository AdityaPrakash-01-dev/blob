import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(request) {
  console.log("Screenshot API called");
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  
  if (!url) {
    return NextResponse.json({ 
      success: false, 
      error: 'URL parameter is required' 
    }, { status: 400 });
  }
  
  try {
    // Launch browser
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    // Open new page
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    
    console.log(`Taking screenshot of: ${url}`);
    
    // Navigate to URL with timeout
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 15000
    });
    
    const screenshot = await page.screenshot({ 
      type: 'jpeg',
      quality: 80,
      encoding: 'base64'
    });
    
    // Close browser
    await browser.close();
    
    console.log("Screenshot captured successfully");
    
    // Return base64 image data
    return NextResponse.json({
      success: true,
      imageUrl: `data:image/jpeg;base64,${screenshot}`
    });
  } catch (error) {
    console.error('Screenshot error:', error);
    return NextResponse.json({ 
      success: false,
      error: error.message,
      imageUrl: "/image1.png"
    }, { status: 200 });  // Return 200 with error info so client can handle it
  }
}