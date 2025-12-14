import { NextRequest, NextResponse } from 'next/server';
import { getEmployees, getDepartments } from '@/lib/mock-data/employees';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search') || undefined;
    const department = searchParams.get('department') || undefined;
    const status = searchParams.get('status') || undefined;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') || '50', 10);

    // Get filtered employees
    const allEmployees = getEmployees({ search, department, status });
    const total = allEmployees.length;

    // Pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedEmployees = allEmployees.slice(startIndex, endIndex);

    // Get departments
    const departments = getDepartments();

    return NextResponse.json({
      success: true,
      data: paginatedEmployees,
      total,
      page,
      pageSize,
      departments,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch employees' },
      { status: 500 }
    );
  }
}
