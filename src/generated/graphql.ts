import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateWilderInput = {
  age: Scalars['Int'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
};

export type Language = {
  __typename?: 'Language';
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addWilder?: Maybe<Wilder>;
};


export type MutationAddWilderArgs = {
  createWilderInput: CreateWilderInput;
};

export type Note = {
  __typename?: 'Note';
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Language>;
  note?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  listWilders?: Maybe<Array<Maybe<Wilder>>>;
};

export type Wilder = {
  __typename?: 'Wilder';
  age?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<Note>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateWilderInput: CreateWilderInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Language: ResolverTypeWrapper<Language>;
  Mutation: ResolverTypeWrapper<{}>;
  Note: ResolverTypeWrapper<Note>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Wilder: ResolverTypeWrapper<Wilder>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CreateWilderInput: CreateWilderInput;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Language: Language;
  Mutation: {};
  Note: Note;
  Query: {};
  String: Scalars['String'];
  Wilder: Wilder;
};

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addWilder?: Resolver<Maybe<ResolversTypes['Wilder']>, ParentType, ContextType, RequireFields<MutationAddWilderArgs, 'createWilderInput'>>;
};

export type NoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  listWilders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Wilder']>>>, ParentType, ContextType>;
};

export type WilderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wilder'] = ResolversParentTypes['Wilder']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Language?: LanguageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Wilder?: WilderResolvers<ContextType>;
};

