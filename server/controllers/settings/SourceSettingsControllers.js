import { SourceReferenceTable } from '../../database/index.js';
const getSourceListHandler = async (requestData, { getDatabaseConnection }) => {
    await getDatabaseConnection(requestData);
    const response = await SourceReferenceTable.findAll();
    return {
        data: response.map((source) => ({
            id: source['_id'],
            name: source.sourceName,
            chartColor: source.chartColor,
            isExpense: source.isExpense,
            isEnabled: source.isEnabled,
        })),
        status: 200,
    };
};
const insertSourceHandler = async (requestData, { getDatabaseConnection }) => {
    const payload = requestData.body;
    await getDatabaseConnection(requestData);
    await SourceReferenceTable.create({
        sourceName: payload.name,
        chartColor: payload.chartColor,
        isExpense: payload.isExpense,
        isEnabled: true,
    });
    return {
        data: 'Successfully inserted data',
        status: 200,
    };
};
const updateSourceHandler = async (requestData, { getDatabaseConnection }) => {
    const { body, pathParams } = requestData;
    const { name, ...restPayload } = body;
    const sanitizedPayload = { ...restPayload, ...(name ? { sourceName: name } : {}) };
    await getDatabaseConnection(requestData);
    const data = await SourceReferenceTable.updateById(pathParams?.id, sanitizedPayload);
    return {
        data,
        status: 200,
    };
};
const deleteSourceHandler = async (requestData, { getDatabaseConnection }) => {
    const { pathParams } = requestData;
    let deleteCount = 0;
    if (pathParams?.id) {
        await getDatabaseConnection(requestData);
        const response = await SourceReferenceTable.deleteById(pathParams?.id);
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
export const sourceApiHandlers = [
    {
        method: 'GET',
        controller: getSourceListHandler,
    },
    {
        method: 'POST',
        controller: insertSourceHandler,
    },
    {
        method: 'PUT',
        controller: updateSourceHandler,
    },
    {
        method: 'DELETE',
        controller: deleteSourceHandler,
    },
];
