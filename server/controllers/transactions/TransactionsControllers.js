import { TransactionTable } from '../../database/index.js';
const getTransactionsHandler = async (requestData, { getDatabaseConnection }) => {
    await getDatabaseConnection(requestData);
    const startDate = new Date(`${requestData.pathParams?.monthAndYear}-01`);
    const lastDay = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
    const searchQuery = {
        date: {
            $gte: startDate,
            $lte: lastDay,
        },
    };
    if (requestData.pathParams.accountType !== 'consolidated') {
        searchQuery.accountType = requestData.pathParams.accountType;
    }
    const response = await TransactionTable.findByFilter(searchQuery);
    return {
        data: response.map((transaction) => ({
            id: transaction['_id'],
            date: transaction.date?.toISOString(),
            accountType: transaction.accountType,
            transactionSource: transaction.transactionOf,
            amount: transaction.amount,
        })),
        status: 200,
    };
};
const insertTransactionHandler = async (requestData, { getDatabaseConnection }) => {
    const { pathParams: { accountType }, body, } = requestData;
    await getDatabaseConnection(requestData);
    const dbData = body.map(({ amount, date, transactionSource }) => ({
        accountType,
        transactionOf: transactionSource,
        date,
        amount,
    }));
    await TransactionTable.create(dbData);
    return {
        data: 'Successfully inserted data',
        status: 200,
    };
};
export const transactionsApiHandlers = [
    {
        method: 'GET',
        controller: getTransactionsHandler,
    },
    {
        method: 'POST',
        controller: insertTransactionHandler,
    },
];
