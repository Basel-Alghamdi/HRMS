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

    // TODO: Implement actual PDF generation using @react-pdf/renderer or similar
    // For now, return a simple text response

    const pdfContent = `
PAYSLIP - ${payslip.monthNameEn} ${payslip.year}
===============================================

EMPLOYEE INFORMATION
-------------------
Name: ${payslip.employee.name}
Employee Number: ${payslip.employee.employeeNumber}
Department: ${payslip.employee.department}
Position: ${payslip.employee.position}

EARNINGS
--------
${payslip.earnings.map(e => `${e.label}: ${e.amount.toFixed(2)} SAR`).join('\n')}
-------------------
Total Earnings: ${payslip.totalEarnings.toFixed(2)} SAR

DEDUCTIONS
----------
${payslip.deductions.map(d => `${d.label}${d.percentage ? ` (${d.percentage}%)` : ''}: ${d.amount.toFixed(2)} SAR`).join('\n')}
-------------------
Total Deductions: ${payslip.totalDeductions.toFixed(2)} SAR

NET SALARY: ${payslip.netSalary.toFixed(2)} SAR

PAYMENT INFORMATION
-------------------
Payment Method: ${payslip.paymentInfo.method}
Bank: ${payslip.paymentInfo.bankName}
Account Number: ${payslip.paymentInfo.accountNumber}
Payment Date: ${new Date(payslip.paymentInfo.paymentDate).toLocaleDateString()}

YEAR TO DATE SUMMARY
--------------------
Total Earnings YTD: ${payslip.ytd.totalEarnings.toFixed(2)} SAR
Total Deductions YTD: ${payslip.ytd.totalDeductions.toFixed(2)} SAR
`;

    // Return as text file for now
    // In production, this would generate and return a proper PDF
    return new NextResponse(pdfContent, {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': `attachment; filename="payslip-${payslip.year}-${String(payslip.month).padStart(2, '0')}.txt"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}
