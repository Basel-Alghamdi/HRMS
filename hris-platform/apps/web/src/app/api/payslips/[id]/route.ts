import { NextRequest, NextResponse } from 'next/server';
import { getPayslipById } from '@/lib/mock-data/payslips';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const payslip = getPayslipById(params.id);

    if (!payslip) {
      return NextResponse.json(
        { success: false, error: 'Payslip not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: payslip,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch payslip' },
      { status: 500 }
    );
  }
}
