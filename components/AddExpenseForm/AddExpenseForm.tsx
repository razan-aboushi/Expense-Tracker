import React, { useState } from 'react';
import { AddExpenseFormContainer } from '@/components/AddExpenseForm/style.component';

interface AddExpenseFormProps {
    onAddExpense: (expense: { amount: number; type: string , other?:string}) => void;
    onClearExpenses: () => void;
}

const AddExpenseForm: React.FC<AddExpenseFormProps> = ({ onAddExpense, onClearExpenses }) => {
    const [expense, setExpense] = useState<number>(0);
    const [expenseType, setExpenseType] = useState<string>('food');
    const [customExpenseType , setCustomExpenseType] =useState<string>();

    const handleAddExpense = () => {
        onAddExpense({ amount: expense, type: expenseType , other:customExpenseType});
        setExpense(0);
    };

    return (
        <AddExpenseFormContainer>
            <input
                type="number"
                value={expense}
                onChange={(e) => setExpense(Number(e.target.value))}
            />
            {expenseType === "other" && (
                <input
                    type="text"
                    value={customExpenseType}
                    onChange={(e) => setCustomExpenseType(e.target.value)}
                    placeholder="Write the expense here..."/>
            )}
            <select value={expenseType} onChange={(e) => setExpenseType(e.target.value)}>
                <option value="food">Food</option>
                <option value="transportation">Transportation</option>
                <option value="dinner">Dinner</option>
                <option value="lunch">Lunch</option>
                <option value="buy a clothes">Buy a clothes</option>
                <option value="buy to trip">Buy to go trip</option>
                <option value="buy a drink">Buy a drink</option>
                <option value="other">Other</option>
            </select>

            <button onClick={handleAddExpense}>Add Expense</button>
            <button onClick={onClearExpenses}>Clear Expenses</button>
        </AddExpenseFormContainer>
    );
};

export default AddExpenseForm;
