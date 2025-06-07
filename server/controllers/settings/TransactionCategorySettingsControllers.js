import { TransactionCategoryTable } from '../../database/index.js';
const getCategoryHandler = async (requestData, { getDatabaseConnection }) => {
    await getDatabaseConnection(requestData);
    const response = await TransactionCategoryTable.findAll();
    return {
        data: response.map((category) => ({
            id: category['_id'],
            name: category.categoryName,
            matchers: category.transactionMatchers,
            budget: category.budget,
            chartColor: category.chartColor,
            sourceId: category.sourceId,
            isEnabled: category.isEnabled,
        })),
        status: 200,
    };
};
const insertCategoryHandler = async (requestData, { getDatabaseConnection }) => {
    const { budget, chartColor, matchers, name, sourceId } = requestData.body;
    await getDatabaseConnection(requestData);
    await TransactionCategoryTable.create({
        transactionMatchers: matchers,
        categoryName: name,
        chartColor: chartColor,
        isEnabled: true,
        sourceId,
        budget,
    });
    return {
        data: 'Successfully inserted data',
        status: 200,
    };
};
const updateCategoryHandler = async (requestData, { getDatabaseConnection }) => {
    const { body, pathParams } = requestData;
    const { matchers, ...restPayload } = body;
    await getDatabaseConnection(requestData);
    const sanitizedPayload = {
        ...restPayload,
        ...(matchers ? { transactionMatchers: matchers } : {}),
    };
    const data = await TransactionCategoryTable.updateById(pathParams?.id, sanitizedPayload);
    return {
        data,
        status: 200,
    };
};
const deleteCategoryHandler = async (requestData, { getDatabaseConnection }) => {
    const { pathParams } = requestData;
    let deleteCount = 0;
    if (pathParams?.id) {
        await getDatabaseConnection(requestData);
        const response = await TransactionCategoryTable.deleteById(pathParams?.id);
        deleteCount = response.deletedCount;
    }
    if (deleteCount > 0) {
        return {
            data: 'Successfully Deleted Data',
            status: 200,
        };
    }
    return {
        data: 'Failed to Delete Data',
        status: 400,
    };
};
export const transactionCategoryApiHandlers = [
    {
        method: 'GET',
        controller: getCategoryHandler,
    },
    {
        method: 'POST',
        controller: insertCategoryHandler,
    },
    {
        method: 'PUT',
        controller: updateCategoryHandler,
    },
    {
        method: 'DELETE',
        controller: deleteCategoryHandler,
    },
];
