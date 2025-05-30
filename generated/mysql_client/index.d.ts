
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Surat
 * 
 */
export type Surat = $Result.DefaultSelection<Prisma.$SuratPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.surat`: Exposes CRUD operations for the **Surat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surats
    * const surats = await prisma.surat.findMany()
    * ```
    */
  get surat(): Prisma.SuratDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Surat: 'Surat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "surat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Surat: {
        payload: Prisma.$SuratPayload<ExtArgs>
        fields: Prisma.SuratFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuratFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuratFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPayload>
          }
          findFirst: {
            args: Prisma.SuratFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuratFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPayload>
          }
          findMany: {
            args: Prisma.SuratFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPayload>[]
          }
          create: {
            args: Prisma.SuratCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPayload>
          }
          createMany: {
            args: Prisma.SuratCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SuratDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPayload>
          }
          update: {
            args: Prisma.SuratUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPayload>
          }
          deleteMany: {
            args: Prisma.SuratDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuratUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuratUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPayload>
          }
          aggregate: {
            args: Prisma.SuratAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurat>
          }
          groupBy: {
            args: Prisma.SuratGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuratGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuratCountArgs<ExtArgs>
            result: $Utils.Optional<SuratCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    surat?: SuratOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    suratDikirim: number
    suratDiterima: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suratDikirim?: boolean | UserCountOutputTypeCountSuratDikirimArgs
    suratDiterima?: boolean | UserCountOutputTypeCountSuratDiterimaArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSuratDikirimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuratWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSuratDiterimaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuratWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nama: string | null
    password: string | null
    email: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    password: string | null
    email: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    password: number
    email: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    password?: true
    email?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    password?: true
    email?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    password?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nama: string
    password: string
    email: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    suratDikirim?: boolean | User$suratDikirimArgs<ExtArgs>
    suratDiterima?: boolean | User$suratDiterimaArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    nama?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "password" | "email" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suratDikirim?: boolean | User$suratDikirimArgs<ExtArgs>
    suratDiterima?: boolean | User$suratDiterimaArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      suratDikirim: Prisma.$SuratPayload<ExtArgs>[]
      suratDiterima: Prisma.$SuratPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      password: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suratDikirim<T extends User$suratDikirimArgs<ExtArgs> = {}>(args?: Subset<T, User$suratDikirimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuratPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suratDiterima<T extends User$suratDiterimaArgs<ExtArgs> = {}>(args?: Subset<T, User$suratDiterimaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuratPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nama: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.suratDikirim
   */
  export type User$suratDikirimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat
     */
    select?: SuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat
     */
    omit?: SuratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratInclude<ExtArgs> | null
    where?: SuratWhereInput
    orderBy?: SuratOrderByWithRelationInput | SuratOrderByWithRelationInput[]
    cursor?: SuratWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuratScalarFieldEnum | SuratScalarFieldEnum[]
  }

  /**
   * User.suratDiterima
   */
  export type User$suratDiterimaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat
     */
    select?: SuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat
     */
    omit?: SuratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratInclude<ExtArgs> | null
    where?: SuratWhereInput
    orderBy?: SuratOrderByWithRelationInput | SuratOrderByWithRelationInput[]
    cursor?: SuratWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuratScalarFieldEnum | SuratScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Surat
   */

  export type AggregateSurat = {
    _count: SuratCountAggregateOutputType | null
    _min: SuratMinAggregateOutputType | null
    _max: SuratMaxAggregateOutputType | null
  }

  export type SuratMinAggregateOutputType = {
    id: string | null
    subject: string | null
    isi: string | null
    kategori_surat: string | null
    status_baca: string | null
    pdf_file_path: string | null
    pengirimId: string | null
    penerimaId: string | null
    createdAt: Date | null
  }

  export type SuratMaxAggregateOutputType = {
    id: string | null
    subject: string | null
    isi: string | null
    kategori_surat: string | null
    status_baca: string | null
    pdf_file_path: string | null
    pengirimId: string | null
    penerimaId: string | null
    createdAt: Date | null
  }

  export type SuratCountAggregateOutputType = {
    id: number
    subject: number
    isi: number
    kategori_surat: number
    status_baca: number
    pdf_file_path: number
    pengirimId: number
    penerimaId: number
    createdAt: number
    _all: number
  }


  export type SuratMinAggregateInputType = {
    id?: true
    subject?: true
    isi?: true
    kategori_surat?: true
    status_baca?: true
    pdf_file_path?: true
    pengirimId?: true
    penerimaId?: true
    createdAt?: true
  }

  export type SuratMaxAggregateInputType = {
    id?: true
    subject?: true
    isi?: true
    kategori_surat?: true
    status_baca?: true
    pdf_file_path?: true
    pengirimId?: true
    penerimaId?: true
    createdAt?: true
  }

  export type SuratCountAggregateInputType = {
    id?: true
    subject?: true
    isi?: true
    kategori_surat?: true
    status_baca?: true
    pdf_file_path?: true
    pengirimId?: true
    penerimaId?: true
    createdAt?: true
    _all?: true
  }

  export type SuratAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surat to aggregate.
     */
    where?: SuratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surats to fetch.
     */
    orderBy?: SuratOrderByWithRelationInput | SuratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surats
    **/
    _count?: true | SuratCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuratMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuratMaxAggregateInputType
  }

  export type GetSuratAggregateType<T extends SuratAggregateArgs> = {
        [P in keyof T & keyof AggregateSurat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurat[P]>
      : GetScalarType<T[P], AggregateSurat[P]>
  }




  export type SuratGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuratWhereInput
    orderBy?: SuratOrderByWithAggregationInput | SuratOrderByWithAggregationInput[]
    by: SuratScalarFieldEnum[] | SuratScalarFieldEnum
    having?: SuratScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuratCountAggregateInputType | true
    _min?: SuratMinAggregateInputType
    _max?: SuratMaxAggregateInputType
  }

  export type SuratGroupByOutputType = {
    id: string
    subject: string
    isi: string | null
    kategori_surat: string
    status_baca: string
    pdf_file_path: string | null
    pengirimId: string
    penerimaId: string
    createdAt: Date
    _count: SuratCountAggregateOutputType | null
    _min: SuratMinAggregateOutputType | null
    _max: SuratMaxAggregateOutputType | null
  }

  type GetSuratGroupByPayload<T extends SuratGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuratGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuratGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuratGroupByOutputType[P]>
            : GetScalarType<T[P], SuratGroupByOutputType[P]>
        }
      >
    >


  export type SuratSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    isi?: boolean
    kategori_surat?: boolean
    status_baca?: boolean
    pdf_file_path?: boolean
    pengirimId?: boolean
    penerimaId?: boolean
    createdAt?: boolean
    pengirim?: boolean | UserDefaultArgs<ExtArgs>
    penerima?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surat"]>



  export type SuratSelectScalar = {
    id?: boolean
    subject?: boolean
    isi?: boolean
    kategori_surat?: boolean
    status_baca?: boolean
    pdf_file_path?: boolean
    pengirimId?: boolean
    penerimaId?: boolean
    createdAt?: boolean
  }

  export type SuratOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "isi" | "kategori_surat" | "status_baca" | "pdf_file_path" | "pengirimId" | "penerimaId" | "createdAt", ExtArgs["result"]["surat"]>
  export type SuratInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengirim?: boolean | UserDefaultArgs<ExtArgs>
    penerima?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SuratPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Surat"
    objects: {
      pengirim: Prisma.$UserPayload<ExtArgs>
      penerima: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subject: string
      isi: string | null
      kategori_surat: string
      status_baca: string
      pdf_file_path: string | null
      pengirimId: string
      penerimaId: string
      createdAt: Date
    }, ExtArgs["result"]["surat"]>
    composites: {}
  }

  type SuratGetPayload<S extends boolean | null | undefined | SuratDefaultArgs> = $Result.GetResult<Prisma.$SuratPayload, S>

  type SuratCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuratFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuratCountAggregateInputType | true
    }

  export interface SuratDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Surat'], meta: { name: 'Surat' } }
    /**
     * Find zero or one Surat that matches the filter.
     * @param {SuratFindUniqueArgs} args - Arguments to find a Surat
     * @example
     * // Get one Surat
     * const surat = await prisma.surat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuratFindUniqueArgs>(args: SelectSubset<T, SuratFindUniqueArgs<ExtArgs>>): Prisma__SuratClient<$Result.GetResult<Prisma.$SuratPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Surat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuratFindUniqueOrThrowArgs} args - Arguments to find a Surat
     * @example
     * // Get one Surat
     * const surat = await prisma.surat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuratFindUniqueOrThrowArgs>(args: SelectSubset<T, SuratFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuratClient<$Result.GetResult<Prisma.$SuratPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Surat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratFindFirstArgs} args - Arguments to find a Surat
     * @example
     * // Get one Surat
     * const surat = await prisma.surat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuratFindFirstArgs>(args?: SelectSubset<T, SuratFindFirstArgs<ExtArgs>>): Prisma__SuratClient<$Result.GetResult<Prisma.$SuratPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Surat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratFindFirstOrThrowArgs} args - Arguments to find a Surat
     * @example
     * // Get one Surat
     * const surat = await prisma.surat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuratFindFirstOrThrowArgs>(args?: SelectSubset<T, SuratFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuratClient<$Result.GetResult<Prisma.$SuratPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Surats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surats
     * const surats = await prisma.surat.findMany()
     * 
     * // Get first 10 Surats
     * const surats = await prisma.surat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suratWithIdOnly = await prisma.surat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuratFindManyArgs>(args?: SelectSubset<T, SuratFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuratPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Surat.
     * @param {SuratCreateArgs} args - Arguments to create a Surat.
     * @example
     * // Create one Surat
     * const Surat = await prisma.surat.create({
     *   data: {
     *     // ... data to create a Surat
     *   }
     * })
     * 
     */
    create<T extends SuratCreateArgs>(args: SelectSubset<T, SuratCreateArgs<ExtArgs>>): Prisma__SuratClient<$Result.GetResult<Prisma.$SuratPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Surats.
     * @param {SuratCreateManyArgs} args - Arguments to create many Surats.
     * @example
     * // Create many Surats
     * const surat = await prisma.surat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuratCreateManyArgs>(args?: SelectSubset<T, SuratCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Surat.
     * @param {SuratDeleteArgs} args - Arguments to delete one Surat.
     * @example
     * // Delete one Surat
     * const Surat = await prisma.surat.delete({
     *   where: {
     *     // ... filter to delete one Surat
     *   }
     * })
     * 
     */
    delete<T extends SuratDeleteArgs>(args: SelectSubset<T, SuratDeleteArgs<ExtArgs>>): Prisma__SuratClient<$Result.GetResult<Prisma.$SuratPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Surat.
     * @param {SuratUpdateArgs} args - Arguments to update one Surat.
     * @example
     * // Update one Surat
     * const surat = await prisma.surat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuratUpdateArgs>(args: SelectSubset<T, SuratUpdateArgs<ExtArgs>>): Prisma__SuratClient<$Result.GetResult<Prisma.$SuratPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Surats.
     * @param {SuratDeleteManyArgs} args - Arguments to filter Surats to delete.
     * @example
     * // Delete a few Surats
     * const { count } = await prisma.surat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuratDeleteManyArgs>(args?: SelectSubset<T, SuratDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surats
     * const surat = await prisma.surat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuratUpdateManyArgs>(args: SelectSubset<T, SuratUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Surat.
     * @param {SuratUpsertArgs} args - Arguments to update or create a Surat.
     * @example
     * // Update or create a Surat
     * const surat = await prisma.surat.upsert({
     *   create: {
     *     // ... data to create a Surat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Surat we want to update
     *   }
     * })
     */
    upsert<T extends SuratUpsertArgs>(args: SelectSubset<T, SuratUpsertArgs<ExtArgs>>): Prisma__SuratClient<$Result.GetResult<Prisma.$SuratPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Surats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratCountArgs} args - Arguments to filter Surats to count.
     * @example
     * // Count the number of Surats
     * const count = await prisma.surat.count({
     *   where: {
     *     // ... the filter for the Surats we want to count
     *   }
     * })
    **/
    count<T extends SuratCountArgs>(
      args?: Subset<T, SuratCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuratCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Surat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuratAggregateArgs>(args: Subset<T, SuratAggregateArgs>): Prisma.PrismaPromise<GetSuratAggregateType<T>>

    /**
     * Group by Surat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuratGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuratGroupByArgs['orderBy'] }
        : { orderBy?: SuratGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuratGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuratGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Surat model
   */
  readonly fields: SuratFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Surat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuratClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengirim<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    penerima<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Surat model
   */
  interface SuratFieldRefs {
    readonly id: FieldRef<"Surat", 'String'>
    readonly subject: FieldRef<"Surat", 'String'>
    readonly isi: FieldRef<"Surat", 'String'>
    readonly kategori_surat: FieldRef<"Surat", 'String'>
    readonly status_baca: FieldRef<"Surat", 'String'>
    readonly pdf_file_path: FieldRef<"Surat", 'String'>
    readonly pengirimId: FieldRef<"Surat", 'String'>
    readonly penerimaId: FieldRef<"Surat", 'String'>
    readonly createdAt: FieldRef<"Surat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Surat findUnique
   */
  export type SuratFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat
     */
    select?: SuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat
     */
    omit?: SuratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratInclude<ExtArgs> | null
    /**
     * Filter, which Surat to fetch.
     */
    where: SuratWhereUniqueInput
  }

  /**
   * Surat findUniqueOrThrow
   */
  export type SuratFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat
     */
    select?: SuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat
     */
    omit?: SuratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratInclude<ExtArgs> | null
    /**
     * Filter, which Surat to fetch.
     */
    where: SuratWhereUniqueInput
  }

  /**
   * Surat findFirst
   */
  export type SuratFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat
     */
    select?: SuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat
     */
    omit?: SuratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratInclude<ExtArgs> | null
    /**
     * Filter, which Surat to fetch.
     */
    where?: SuratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surats to fetch.
     */
    orderBy?: SuratOrderByWithRelationInput | SuratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surats.
     */
    cursor?: SuratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surats.
     */
    distinct?: SuratScalarFieldEnum | SuratScalarFieldEnum[]
  }

  /**
   * Surat findFirstOrThrow
   */
  export type SuratFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat
     */
    select?: SuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat
     */
    omit?: SuratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratInclude<ExtArgs> | null
    /**
     * Filter, which Surat to fetch.
     */
    where?: SuratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surats to fetch.
     */
    orderBy?: SuratOrderByWithRelationInput | SuratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surats.
     */
    cursor?: SuratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surats.
     */
    distinct?: SuratScalarFieldEnum | SuratScalarFieldEnum[]
  }

  /**
   * Surat findMany
   */
  export type SuratFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat
     */
    select?: SuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat
     */
    omit?: SuratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratInclude<ExtArgs> | null
    /**
     * Filter, which Surats to fetch.
     */
    where?: SuratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surats to fetch.
     */
    orderBy?: SuratOrderByWithRelationInput | SuratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surats.
     */
    cursor?: SuratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surats.
     */
    skip?: number
    distinct?: SuratScalarFieldEnum | SuratScalarFieldEnum[]
  }

  /**
   * Surat create
   */
  export type SuratCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat
     */
    select?: SuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat
     */
    omit?: SuratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratInclude<ExtArgs> | null
    /**
     * The data needed to create a Surat.
     */
    data: XOR<SuratCreateInput, SuratUncheckedCreateInput>
  }

  /**
   * Surat createMany
   */
  export type SuratCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surats.
     */
    data: SuratCreateManyInput | SuratCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Surat update
   */
  export type SuratUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat
     */
    select?: SuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat
     */
    omit?: SuratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratInclude<ExtArgs> | null
    /**
     * The data needed to update a Surat.
     */
    data: XOR<SuratUpdateInput, SuratUncheckedUpdateInput>
    /**
     * Choose, which Surat to update.
     */
    where: SuratWhereUniqueInput
  }

  /**
   * Surat updateMany
   */
  export type SuratUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surats.
     */
    data: XOR<SuratUpdateManyMutationInput, SuratUncheckedUpdateManyInput>
    /**
     * Filter which Surats to update
     */
    where?: SuratWhereInput
    /**
     * Limit how many Surats to update.
     */
    limit?: number
  }

  /**
   * Surat upsert
   */
  export type SuratUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat
     */
    select?: SuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat
     */
    omit?: SuratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratInclude<ExtArgs> | null
    /**
     * The filter to search for the Surat to update in case it exists.
     */
    where: SuratWhereUniqueInput
    /**
     * In case the Surat found by the `where` argument doesn't exist, create a new Surat with this data.
     */
    create: XOR<SuratCreateInput, SuratUncheckedCreateInput>
    /**
     * In case the Surat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuratUpdateInput, SuratUncheckedUpdateInput>
  }

  /**
   * Surat delete
   */
  export type SuratDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat
     */
    select?: SuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat
     */
    omit?: SuratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratInclude<ExtArgs> | null
    /**
     * Filter which Surat to delete.
     */
    where: SuratWhereUniqueInput
  }

  /**
   * Surat deleteMany
   */
  export type SuratDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surats to delete
     */
    where?: SuratWhereInput
    /**
     * Limit how many Surats to delete.
     */
    limit?: number
  }

  /**
   * Surat without action
   */
  export type SuratDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat
     */
    select?: SuratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat
     */
    omit?: SuratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    password: 'password',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SuratScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    isi: 'isi',
    kategori_surat: 'kategori_surat',
    status_baca: 'status_baca',
    pdf_file_path: 'pdf_file_path',
    pengirimId: 'pengirimId',
    penerimaId: 'penerimaId',
    createdAt: 'createdAt'
  };

  export type SuratScalarFieldEnum = (typeof SuratScalarFieldEnum)[keyof typeof SuratScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    password: 'password',
    email: 'email'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const SuratOrderByRelevanceFieldEnum: {
    id: 'id',
    subject: 'subject',
    isi: 'isi',
    kategori_surat: 'kategori_surat',
    status_baca: 'status_baca',
    pdf_file_path: 'pdf_file_path',
    pengirimId: 'pengirimId',
    penerimaId: 'penerimaId'
  };

  export type SuratOrderByRelevanceFieldEnum = (typeof SuratOrderByRelevanceFieldEnum)[keyof typeof SuratOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    suratDikirim?: SuratListRelationFilter
    suratDiterima?: SuratListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    suratDikirim?: SuratOrderByRelationAggregateInput
    suratDiterima?: SuratOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    suratDikirim?: SuratListRelationFilter
    suratDiterima?: SuratListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nama?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SuratWhereInput = {
    AND?: SuratWhereInput | SuratWhereInput[]
    OR?: SuratWhereInput[]
    NOT?: SuratWhereInput | SuratWhereInput[]
    id?: StringFilter<"Surat"> | string
    subject?: StringFilter<"Surat"> | string
    isi?: StringNullableFilter<"Surat"> | string | null
    kategori_surat?: StringFilter<"Surat"> | string
    status_baca?: StringFilter<"Surat"> | string
    pdf_file_path?: StringNullableFilter<"Surat"> | string | null
    pengirimId?: StringFilter<"Surat"> | string
    penerimaId?: StringFilter<"Surat"> | string
    createdAt?: DateTimeFilter<"Surat"> | Date | string
    pengirim?: XOR<UserScalarRelationFilter, UserWhereInput>
    penerima?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SuratOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    isi?: SortOrderInput | SortOrder
    kategori_surat?: SortOrder
    status_baca?: SortOrder
    pdf_file_path?: SortOrderInput | SortOrder
    pengirimId?: SortOrder
    penerimaId?: SortOrder
    createdAt?: SortOrder
    pengirim?: UserOrderByWithRelationInput
    penerima?: UserOrderByWithRelationInput
    _relevance?: SuratOrderByRelevanceInput
  }

  export type SuratWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuratWhereInput | SuratWhereInput[]
    OR?: SuratWhereInput[]
    NOT?: SuratWhereInput | SuratWhereInput[]
    subject?: StringFilter<"Surat"> | string
    isi?: StringNullableFilter<"Surat"> | string | null
    kategori_surat?: StringFilter<"Surat"> | string
    status_baca?: StringFilter<"Surat"> | string
    pdf_file_path?: StringNullableFilter<"Surat"> | string | null
    pengirimId?: StringFilter<"Surat"> | string
    penerimaId?: StringFilter<"Surat"> | string
    createdAt?: DateTimeFilter<"Surat"> | Date | string
    pengirim?: XOR<UserScalarRelationFilter, UserWhereInput>
    penerima?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SuratOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    isi?: SortOrderInput | SortOrder
    kategori_surat?: SortOrder
    status_baca?: SortOrder
    pdf_file_path?: SortOrderInput | SortOrder
    pengirimId?: SortOrder
    penerimaId?: SortOrder
    createdAt?: SortOrder
    _count?: SuratCountOrderByAggregateInput
    _max?: SuratMaxOrderByAggregateInput
    _min?: SuratMinOrderByAggregateInput
  }

  export type SuratScalarWhereWithAggregatesInput = {
    AND?: SuratScalarWhereWithAggregatesInput | SuratScalarWhereWithAggregatesInput[]
    OR?: SuratScalarWhereWithAggregatesInput[]
    NOT?: SuratScalarWhereWithAggregatesInput | SuratScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Surat"> | string
    subject?: StringWithAggregatesFilter<"Surat"> | string
    isi?: StringNullableWithAggregatesFilter<"Surat"> | string | null
    kategori_surat?: StringWithAggregatesFilter<"Surat"> | string
    status_baca?: StringWithAggregatesFilter<"Surat"> | string
    pdf_file_path?: StringNullableWithAggregatesFilter<"Surat"> | string | null
    pengirimId?: StringWithAggregatesFilter<"Surat"> | string
    penerimaId?: StringWithAggregatesFilter<"Surat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Surat"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    nama: string
    password: string
    email: string
    createdAt?: Date | string
    suratDikirim?: SuratCreateNestedManyWithoutPengirimInput
    suratDiterima?: SuratCreateNestedManyWithoutPenerimaInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nama: string
    password: string
    email: string
    createdAt?: Date | string
    suratDikirim?: SuratUncheckedCreateNestedManyWithoutPengirimInput
    suratDiterima?: SuratUncheckedCreateNestedManyWithoutPenerimaInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suratDikirim?: SuratUpdateManyWithoutPengirimNestedInput
    suratDiterima?: SuratUpdateManyWithoutPenerimaNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suratDikirim?: SuratUncheckedUpdateManyWithoutPengirimNestedInput
    suratDiterima?: SuratUncheckedUpdateManyWithoutPenerimaNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nama: string
    password: string
    email: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuratCreateInput = {
    id?: string
    subject: string
    isi?: string | null
    kategori_surat: string
    status_baca?: string
    pdf_file_path?: string | null
    createdAt?: Date | string
    pengirim: UserCreateNestedOneWithoutSuratDikirimInput
    penerima: UserCreateNestedOneWithoutSuratDiterimaInput
  }

  export type SuratUncheckedCreateInput = {
    id?: string
    subject: string
    isi?: string | null
    kategori_surat: string
    status_baca?: string
    pdf_file_path?: string | null
    pengirimId: string
    penerimaId: string
    createdAt?: Date | string
  }

  export type SuratUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_surat?: StringFieldUpdateOperationsInput | string
    status_baca?: StringFieldUpdateOperationsInput | string
    pdf_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengirim?: UserUpdateOneRequiredWithoutSuratDikirimNestedInput
    penerima?: UserUpdateOneRequiredWithoutSuratDiterimaNestedInput
  }

  export type SuratUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_surat?: StringFieldUpdateOperationsInput | string
    status_baca?: StringFieldUpdateOperationsInput | string
    pdf_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    pengirimId?: StringFieldUpdateOperationsInput | string
    penerimaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuratCreateManyInput = {
    id?: string
    subject: string
    isi?: string | null
    kategori_surat: string
    status_baca?: string
    pdf_file_path?: string | null
    pengirimId: string
    penerimaId: string
    createdAt?: Date | string
  }

  export type SuratUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_surat?: StringFieldUpdateOperationsInput | string
    status_baca?: StringFieldUpdateOperationsInput | string
    pdf_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuratUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_surat?: StringFieldUpdateOperationsInput | string
    status_baca?: StringFieldUpdateOperationsInput | string
    pdf_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    pengirimId?: StringFieldUpdateOperationsInput | string
    penerimaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SuratListRelationFilter = {
    every?: SuratWhereInput
    some?: SuratWhereInput
    none?: SuratWhereInput
  }

  export type SuratOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SuratOrderByRelevanceInput = {
    fields: SuratOrderByRelevanceFieldEnum | SuratOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SuratCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    isi?: SortOrder
    kategori_surat?: SortOrder
    status_baca?: SortOrder
    pdf_file_path?: SortOrder
    pengirimId?: SortOrder
    penerimaId?: SortOrder
    createdAt?: SortOrder
  }

  export type SuratMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    isi?: SortOrder
    kategori_surat?: SortOrder
    status_baca?: SortOrder
    pdf_file_path?: SortOrder
    pengirimId?: SortOrder
    penerimaId?: SortOrder
    createdAt?: SortOrder
  }

  export type SuratMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    isi?: SortOrder
    kategori_surat?: SortOrder
    status_baca?: SortOrder
    pdf_file_path?: SortOrder
    pengirimId?: SortOrder
    penerimaId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SuratCreateNestedManyWithoutPengirimInput = {
    create?: XOR<SuratCreateWithoutPengirimInput, SuratUncheckedCreateWithoutPengirimInput> | SuratCreateWithoutPengirimInput[] | SuratUncheckedCreateWithoutPengirimInput[]
    connectOrCreate?: SuratCreateOrConnectWithoutPengirimInput | SuratCreateOrConnectWithoutPengirimInput[]
    createMany?: SuratCreateManyPengirimInputEnvelope
    connect?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
  }

  export type SuratCreateNestedManyWithoutPenerimaInput = {
    create?: XOR<SuratCreateWithoutPenerimaInput, SuratUncheckedCreateWithoutPenerimaInput> | SuratCreateWithoutPenerimaInput[] | SuratUncheckedCreateWithoutPenerimaInput[]
    connectOrCreate?: SuratCreateOrConnectWithoutPenerimaInput | SuratCreateOrConnectWithoutPenerimaInput[]
    createMany?: SuratCreateManyPenerimaInputEnvelope
    connect?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
  }

  export type SuratUncheckedCreateNestedManyWithoutPengirimInput = {
    create?: XOR<SuratCreateWithoutPengirimInput, SuratUncheckedCreateWithoutPengirimInput> | SuratCreateWithoutPengirimInput[] | SuratUncheckedCreateWithoutPengirimInput[]
    connectOrCreate?: SuratCreateOrConnectWithoutPengirimInput | SuratCreateOrConnectWithoutPengirimInput[]
    createMany?: SuratCreateManyPengirimInputEnvelope
    connect?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
  }

  export type SuratUncheckedCreateNestedManyWithoutPenerimaInput = {
    create?: XOR<SuratCreateWithoutPenerimaInput, SuratUncheckedCreateWithoutPenerimaInput> | SuratCreateWithoutPenerimaInput[] | SuratUncheckedCreateWithoutPenerimaInput[]
    connectOrCreate?: SuratCreateOrConnectWithoutPenerimaInput | SuratCreateOrConnectWithoutPenerimaInput[]
    createMany?: SuratCreateManyPenerimaInputEnvelope
    connect?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SuratUpdateManyWithoutPengirimNestedInput = {
    create?: XOR<SuratCreateWithoutPengirimInput, SuratUncheckedCreateWithoutPengirimInput> | SuratCreateWithoutPengirimInput[] | SuratUncheckedCreateWithoutPengirimInput[]
    connectOrCreate?: SuratCreateOrConnectWithoutPengirimInput | SuratCreateOrConnectWithoutPengirimInput[]
    upsert?: SuratUpsertWithWhereUniqueWithoutPengirimInput | SuratUpsertWithWhereUniqueWithoutPengirimInput[]
    createMany?: SuratCreateManyPengirimInputEnvelope
    set?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    disconnect?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    delete?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    connect?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    update?: SuratUpdateWithWhereUniqueWithoutPengirimInput | SuratUpdateWithWhereUniqueWithoutPengirimInput[]
    updateMany?: SuratUpdateManyWithWhereWithoutPengirimInput | SuratUpdateManyWithWhereWithoutPengirimInput[]
    deleteMany?: SuratScalarWhereInput | SuratScalarWhereInput[]
  }

  export type SuratUpdateManyWithoutPenerimaNestedInput = {
    create?: XOR<SuratCreateWithoutPenerimaInput, SuratUncheckedCreateWithoutPenerimaInput> | SuratCreateWithoutPenerimaInput[] | SuratUncheckedCreateWithoutPenerimaInput[]
    connectOrCreate?: SuratCreateOrConnectWithoutPenerimaInput | SuratCreateOrConnectWithoutPenerimaInput[]
    upsert?: SuratUpsertWithWhereUniqueWithoutPenerimaInput | SuratUpsertWithWhereUniqueWithoutPenerimaInput[]
    createMany?: SuratCreateManyPenerimaInputEnvelope
    set?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    disconnect?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    delete?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    connect?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    update?: SuratUpdateWithWhereUniqueWithoutPenerimaInput | SuratUpdateWithWhereUniqueWithoutPenerimaInput[]
    updateMany?: SuratUpdateManyWithWhereWithoutPenerimaInput | SuratUpdateManyWithWhereWithoutPenerimaInput[]
    deleteMany?: SuratScalarWhereInput | SuratScalarWhereInput[]
  }

  export type SuratUncheckedUpdateManyWithoutPengirimNestedInput = {
    create?: XOR<SuratCreateWithoutPengirimInput, SuratUncheckedCreateWithoutPengirimInput> | SuratCreateWithoutPengirimInput[] | SuratUncheckedCreateWithoutPengirimInput[]
    connectOrCreate?: SuratCreateOrConnectWithoutPengirimInput | SuratCreateOrConnectWithoutPengirimInput[]
    upsert?: SuratUpsertWithWhereUniqueWithoutPengirimInput | SuratUpsertWithWhereUniqueWithoutPengirimInput[]
    createMany?: SuratCreateManyPengirimInputEnvelope
    set?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    disconnect?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    delete?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    connect?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    update?: SuratUpdateWithWhereUniqueWithoutPengirimInput | SuratUpdateWithWhereUniqueWithoutPengirimInput[]
    updateMany?: SuratUpdateManyWithWhereWithoutPengirimInput | SuratUpdateManyWithWhereWithoutPengirimInput[]
    deleteMany?: SuratScalarWhereInput | SuratScalarWhereInput[]
  }

  export type SuratUncheckedUpdateManyWithoutPenerimaNestedInput = {
    create?: XOR<SuratCreateWithoutPenerimaInput, SuratUncheckedCreateWithoutPenerimaInput> | SuratCreateWithoutPenerimaInput[] | SuratUncheckedCreateWithoutPenerimaInput[]
    connectOrCreate?: SuratCreateOrConnectWithoutPenerimaInput | SuratCreateOrConnectWithoutPenerimaInput[]
    upsert?: SuratUpsertWithWhereUniqueWithoutPenerimaInput | SuratUpsertWithWhereUniqueWithoutPenerimaInput[]
    createMany?: SuratCreateManyPenerimaInputEnvelope
    set?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    disconnect?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    delete?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    connect?: SuratWhereUniqueInput | SuratWhereUniqueInput[]
    update?: SuratUpdateWithWhereUniqueWithoutPenerimaInput | SuratUpdateWithWhereUniqueWithoutPenerimaInput[]
    updateMany?: SuratUpdateManyWithWhereWithoutPenerimaInput | SuratUpdateManyWithWhereWithoutPenerimaInput[]
    deleteMany?: SuratScalarWhereInput | SuratScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSuratDikirimInput = {
    create?: XOR<UserCreateWithoutSuratDikirimInput, UserUncheckedCreateWithoutSuratDikirimInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuratDikirimInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSuratDiterimaInput = {
    create?: XOR<UserCreateWithoutSuratDiterimaInput, UserUncheckedCreateWithoutSuratDiterimaInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuratDiterimaInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutSuratDikirimNestedInput = {
    create?: XOR<UserCreateWithoutSuratDikirimInput, UserUncheckedCreateWithoutSuratDikirimInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuratDikirimInput
    upsert?: UserUpsertWithoutSuratDikirimInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSuratDikirimInput, UserUpdateWithoutSuratDikirimInput>, UserUncheckedUpdateWithoutSuratDikirimInput>
  }

  export type UserUpdateOneRequiredWithoutSuratDiterimaNestedInput = {
    create?: XOR<UserCreateWithoutSuratDiterimaInput, UserUncheckedCreateWithoutSuratDiterimaInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuratDiterimaInput
    upsert?: UserUpsertWithoutSuratDiterimaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSuratDiterimaInput, UserUpdateWithoutSuratDiterimaInput>, UserUncheckedUpdateWithoutSuratDiterimaInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SuratCreateWithoutPengirimInput = {
    id?: string
    subject: string
    isi?: string | null
    kategori_surat: string
    status_baca?: string
    pdf_file_path?: string | null
    createdAt?: Date | string
    penerima: UserCreateNestedOneWithoutSuratDiterimaInput
  }

  export type SuratUncheckedCreateWithoutPengirimInput = {
    id?: string
    subject: string
    isi?: string | null
    kategori_surat: string
    status_baca?: string
    pdf_file_path?: string | null
    penerimaId: string
    createdAt?: Date | string
  }

  export type SuratCreateOrConnectWithoutPengirimInput = {
    where: SuratWhereUniqueInput
    create: XOR<SuratCreateWithoutPengirimInput, SuratUncheckedCreateWithoutPengirimInput>
  }

  export type SuratCreateManyPengirimInputEnvelope = {
    data: SuratCreateManyPengirimInput | SuratCreateManyPengirimInput[]
    skipDuplicates?: boolean
  }

  export type SuratCreateWithoutPenerimaInput = {
    id?: string
    subject: string
    isi?: string | null
    kategori_surat: string
    status_baca?: string
    pdf_file_path?: string | null
    createdAt?: Date | string
    pengirim: UserCreateNestedOneWithoutSuratDikirimInput
  }

  export type SuratUncheckedCreateWithoutPenerimaInput = {
    id?: string
    subject: string
    isi?: string | null
    kategori_surat: string
    status_baca?: string
    pdf_file_path?: string | null
    pengirimId: string
    createdAt?: Date | string
  }

  export type SuratCreateOrConnectWithoutPenerimaInput = {
    where: SuratWhereUniqueInput
    create: XOR<SuratCreateWithoutPenerimaInput, SuratUncheckedCreateWithoutPenerimaInput>
  }

  export type SuratCreateManyPenerimaInputEnvelope = {
    data: SuratCreateManyPenerimaInput | SuratCreateManyPenerimaInput[]
    skipDuplicates?: boolean
  }

  export type SuratUpsertWithWhereUniqueWithoutPengirimInput = {
    where: SuratWhereUniqueInput
    update: XOR<SuratUpdateWithoutPengirimInput, SuratUncheckedUpdateWithoutPengirimInput>
    create: XOR<SuratCreateWithoutPengirimInput, SuratUncheckedCreateWithoutPengirimInput>
  }

  export type SuratUpdateWithWhereUniqueWithoutPengirimInput = {
    where: SuratWhereUniqueInput
    data: XOR<SuratUpdateWithoutPengirimInput, SuratUncheckedUpdateWithoutPengirimInput>
  }

  export type SuratUpdateManyWithWhereWithoutPengirimInput = {
    where: SuratScalarWhereInput
    data: XOR<SuratUpdateManyMutationInput, SuratUncheckedUpdateManyWithoutPengirimInput>
  }

  export type SuratScalarWhereInput = {
    AND?: SuratScalarWhereInput | SuratScalarWhereInput[]
    OR?: SuratScalarWhereInput[]
    NOT?: SuratScalarWhereInput | SuratScalarWhereInput[]
    id?: StringFilter<"Surat"> | string
    subject?: StringFilter<"Surat"> | string
    isi?: StringNullableFilter<"Surat"> | string | null
    kategori_surat?: StringFilter<"Surat"> | string
    status_baca?: StringFilter<"Surat"> | string
    pdf_file_path?: StringNullableFilter<"Surat"> | string | null
    pengirimId?: StringFilter<"Surat"> | string
    penerimaId?: StringFilter<"Surat"> | string
    createdAt?: DateTimeFilter<"Surat"> | Date | string
  }

  export type SuratUpsertWithWhereUniqueWithoutPenerimaInput = {
    where: SuratWhereUniqueInput
    update: XOR<SuratUpdateWithoutPenerimaInput, SuratUncheckedUpdateWithoutPenerimaInput>
    create: XOR<SuratCreateWithoutPenerimaInput, SuratUncheckedCreateWithoutPenerimaInput>
  }

  export type SuratUpdateWithWhereUniqueWithoutPenerimaInput = {
    where: SuratWhereUniqueInput
    data: XOR<SuratUpdateWithoutPenerimaInput, SuratUncheckedUpdateWithoutPenerimaInput>
  }

  export type SuratUpdateManyWithWhereWithoutPenerimaInput = {
    where: SuratScalarWhereInput
    data: XOR<SuratUpdateManyMutationInput, SuratUncheckedUpdateManyWithoutPenerimaInput>
  }

  export type UserCreateWithoutSuratDikirimInput = {
    id?: string
    nama: string
    password: string
    email: string
    createdAt?: Date | string
    suratDiterima?: SuratCreateNestedManyWithoutPenerimaInput
  }

  export type UserUncheckedCreateWithoutSuratDikirimInput = {
    id?: string
    nama: string
    password: string
    email: string
    createdAt?: Date | string
    suratDiterima?: SuratUncheckedCreateNestedManyWithoutPenerimaInput
  }

  export type UserCreateOrConnectWithoutSuratDikirimInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSuratDikirimInput, UserUncheckedCreateWithoutSuratDikirimInput>
  }

  export type UserCreateWithoutSuratDiterimaInput = {
    id?: string
    nama: string
    password: string
    email: string
    createdAt?: Date | string
    suratDikirim?: SuratCreateNestedManyWithoutPengirimInput
  }

  export type UserUncheckedCreateWithoutSuratDiterimaInput = {
    id?: string
    nama: string
    password: string
    email: string
    createdAt?: Date | string
    suratDikirim?: SuratUncheckedCreateNestedManyWithoutPengirimInput
  }

  export type UserCreateOrConnectWithoutSuratDiterimaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSuratDiterimaInput, UserUncheckedCreateWithoutSuratDiterimaInput>
  }

  export type UserUpsertWithoutSuratDikirimInput = {
    update: XOR<UserUpdateWithoutSuratDikirimInput, UserUncheckedUpdateWithoutSuratDikirimInput>
    create: XOR<UserCreateWithoutSuratDikirimInput, UserUncheckedCreateWithoutSuratDikirimInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSuratDikirimInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSuratDikirimInput, UserUncheckedUpdateWithoutSuratDikirimInput>
  }

  export type UserUpdateWithoutSuratDikirimInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suratDiterima?: SuratUpdateManyWithoutPenerimaNestedInput
  }

  export type UserUncheckedUpdateWithoutSuratDikirimInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suratDiterima?: SuratUncheckedUpdateManyWithoutPenerimaNestedInput
  }

  export type UserUpsertWithoutSuratDiterimaInput = {
    update: XOR<UserUpdateWithoutSuratDiterimaInput, UserUncheckedUpdateWithoutSuratDiterimaInput>
    create: XOR<UserCreateWithoutSuratDiterimaInput, UserUncheckedCreateWithoutSuratDiterimaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSuratDiterimaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSuratDiterimaInput, UserUncheckedUpdateWithoutSuratDiterimaInput>
  }

  export type UserUpdateWithoutSuratDiterimaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suratDikirim?: SuratUpdateManyWithoutPengirimNestedInput
  }

  export type UserUncheckedUpdateWithoutSuratDiterimaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suratDikirim?: SuratUncheckedUpdateManyWithoutPengirimNestedInput
  }

  export type SuratCreateManyPengirimInput = {
    id?: string
    subject: string
    isi?: string | null
    kategori_surat: string
    status_baca?: string
    pdf_file_path?: string | null
    penerimaId: string
    createdAt?: Date | string
  }

  export type SuratCreateManyPenerimaInput = {
    id?: string
    subject: string
    isi?: string | null
    kategori_surat: string
    status_baca?: string
    pdf_file_path?: string | null
    pengirimId: string
    createdAt?: Date | string
  }

  export type SuratUpdateWithoutPengirimInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_surat?: StringFieldUpdateOperationsInput | string
    status_baca?: StringFieldUpdateOperationsInput | string
    pdf_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penerima?: UserUpdateOneRequiredWithoutSuratDiterimaNestedInput
  }

  export type SuratUncheckedUpdateWithoutPengirimInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_surat?: StringFieldUpdateOperationsInput | string
    status_baca?: StringFieldUpdateOperationsInput | string
    pdf_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    penerimaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuratUncheckedUpdateManyWithoutPengirimInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_surat?: StringFieldUpdateOperationsInput | string
    status_baca?: StringFieldUpdateOperationsInput | string
    pdf_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    penerimaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuratUpdateWithoutPenerimaInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_surat?: StringFieldUpdateOperationsInput | string
    status_baca?: StringFieldUpdateOperationsInput | string
    pdf_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengirim?: UserUpdateOneRequiredWithoutSuratDikirimNestedInput
  }

  export type SuratUncheckedUpdateWithoutPenerimaInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_surat?: StringFieldUpdateOperationsInput | string
    status_baca?: StringFieldUpdateOperationsInput | string
    pdf_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    pengirimId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuratUncheckedUpdateManyWithoutPenerimaInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_surat?: StringFieldUpdateOperationsInput | string
    status_baca?: StringFieldUpdateOperationsInput | string
    pdf_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    pengirimId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}