import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider } from '@chakra-ui/react';
import AddExpenseForm from '../components/AddExpenseForm/AddExpenseForm';
import ExpenseList from '../components/ExpenseList/ExpenseList';
import ExpenseChart from '../components/ExpenseChart/ExpenseChart';
import {ExpenseHomeContainer} from "@/pages/style.component";

const Home: React.FC = () => {
    const queryClient = new QueryClient();

    const [expenses, setExpenses] = useState<{ amount: number; type: string; other:string }[]>([]);

    const handleAddExpense = (expense: { amount: number; type: string ; other:string}) => {
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
    };

    const handleClearExpenses = () => {
        setExpenses([]);
    };

    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <ExpenseHomeContainer>
                    <h1>Expense Tracker</h1>
                    <AddExpenseForm onAddExpense={handleAddExpense} onClearExpenses={handleClearExpenses} />
                    <ExpenseList expenses={expenses} />
                    <ExpenseChart expenses={expenses} />
                </ExpenseHomeContainer>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </ChakraProvider>
    );
};

export default Home;
