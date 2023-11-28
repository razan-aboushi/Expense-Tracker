import React from 'react';
import { ExpenseListContainer } from '@/components/ExpenseList/style.component';

interface ExpenseListProps {
    expenses: { amount: number; type: string; other: string }[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
    return (
        <ExpenseListContainer>
            <h2>Expense List</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.type !== "other" ?
                            `${index + 1} - ${expense.type} ( ${expense.amount} JD )` :
                            `${index + 1} - ${expense.other} ( ${expense.amount} JD )`
                        }
                    </li>
                ))}
            </ul>
        </ExpenseListContainer>
    );
};

export default ExpenseList;
