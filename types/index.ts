export interface Decision {
    id: string;
    title: string;
    context: string;
    justification: string;
    user_id: string;
    created_at: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    role: string;
    created_at: string;
}

export interface Criteria{
    id: string;
    decision_id: string;
    label: string;
    weight: number;
}

export interface Evaluation{
    id: string;
    option_id: string;
    criterion_id: string;
    score: number;
    comment: string;
}

export interface Option{
    id: string;
    decision_id: string;
    name: string;
    description: string;
    estimated_cost: number;
}

export interface Transaction{
    id: string;
    type: string;
    amount: number;
    category: string;
    decision_id: string;
}