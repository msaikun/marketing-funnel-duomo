import { NextResponse } from 'next/server';

export const postQuizData = async (data: { selectedPlanId: number, email: string }) => {
  const response = await fetch('/', {
    method  : 'post',
    headers : { 'Content-Type': 'application/json' },
    body    : JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit quiz data');
  }

  return NextResponse.json({ data });
};
