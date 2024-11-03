import { MongoDatabaseActions } from './MongoDatabaseActions.js';
import { FamilyModel, IFamily } from './models/FamilyModel.js';
import { TransactionCategoryDataModel, ITransactionCategory } from './models/TransactionCategoryModel.js';
import { SourceReferenceDataModel, ISourceReference } from './models/SourceReferenceModel.js';
import { SummaryTilesModel, ISummaryTile } from './models/SummaryTilesModel.js';
import { TransactionModel, ITransaction } from './models/TransactionsModel.js';
import { UserModel, IUser } from './models/UserModel.js';

export const FamilyTable = MongoDatabaseActions.of<IFamily>(FamilyModel);

export const TransactionCategoryTable = MongoDatabaseActions.of<ITransactionCategory>(TransactionCategoryDataModel);

export const SourceReferenceTable = MongoDatabaseActions.of<ISourceReference>(SourceReferenceDataModel);

export const SummaryTileTable = MongoDatabaseActions.of<ISummaryTile>(SummaryTilesModel);

export const TransactionTable = MongoDatabaseActions.of<ITransaction>(TransactionModel);

export const UserTable = MongoDatabaseActions.of<IUser>(UserModel);
