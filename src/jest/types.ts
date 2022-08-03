export interface ITransaction {
    id: string,
    grossPrice: number,
    productId: string,
    productName: string,
    serviceTypeAliasId: string,
    soldAt: string
}

export interface IGroupedTransactions {
    date: string
    comparisonDate: number
    index: number
    transactions: ITransaction[]
    alias: string
    id: string
}

export interface IFelfelTopSeller {
    productId: string,
    totalSales: number,
    productName: string,
    foodScoutThumbUrl: string | undefined
    isFresh: boolean,
    isLaunchingProduct: boolean,
    isTestProduct: boolean
}

export interface IGavettiTopSeller {
    productId: string,
    totalSales: number,
    productName: string
}

export interface ITopMilkTypes {
    milkType: string,
    totalSales: number
}

export interface ITestProductGoal {
    productId: string,
    productName: string,
    foodScoutThumbUrl: string | undefined,
    salesGoal: number,
    salesGoalProgress: number
}

export interface IPushedTransactions {
    transactions: IPushedTransaction[]
}

export interface IPushedTransaction {
    productId: string,
    productName: string,
    grossPrice: number,
    soldAt: string,
    serviceTypeAliasId: string,
    foodScoutThumbUrl: string | undefined,
    isFresh: boolean,
    isLaunchingProduct: boolean,
    isTestProduct: boolean,
    milkType: string | undefined,
    salesGoalProgress: number
}