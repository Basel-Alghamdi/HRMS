import { NextRequest, NextResponse } from 'next/server';
import { getPayslipsByYear, getAvailableYears } from '@/lib/mock-data/payslips';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const year = searchParams.get('year');

    if (year) {
      const yearNum = parseInt(year, 10);
      const payslips = getPayslipsByYear(yearNum);

      return NextResponse.json({
        success: true,
        data: payslips,
        year: yearNum,
      });
    }

    // Return available years if no year specified
    const years = getAvailableYears();
    return NextResponse.json({
      success: true,
      data: {
        years,
        currentYear: new Date().getFullYear(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch payslips' },
      { status: 500 }
    );
  }
}
