import { Resolver, Query, Mutation, Arg, UseMiddleware } from "type-graphql";
import Wilder, { CreateWilderInput } from "../../entity/Wilder";
import WilderService from "../../service/wilder.service";

export const ErrorInterceptor: MiddlewareFn<any> = async (
  { context, info },
  next
) => {
  try {
    return await next();
  } catch (err) {
    console.log("%c⧭", "color: #e50000", JSON.stringify(err));
    // write error to file log
    console.log(err, context, info);

    // hide errors from db like printing sql query
    // if (someCondition(err)) {
    //   throw new Error("Unknown error occurred!");
    // }

    // rethrow the error
    throw err;
  }
};

@Resolver()
export default class WilderResolver {
  @Query(() => [Wilder])
  async listWilders(): Promise<Wilder[]> {
    let wilders = await new WilderService().listWilders();
    return wilders;
  }

  @UseMiddleware(ErrorInterceptor)
  @Mutation(() => Wilder)
  async addWilder(
    @Arg("createWilderInput")
    createWilderInput: CreateWilderInput
  ): Promise<Wilder> {
    console.log("createWilderInput", createWilderInput);
    let wilder = await new WilderService().createWilder({
      ...createWilderInput,
    });
    return wilder;
  }
}

// import { MutationAddWilderArgs, Wilder } from "../../src/generated/graphql";
// export default {
//   Query: {
//     async listWilders(): Promise<Wilder[]> {
//       let wilders = await new WilderService().listWilders();
//       return [];
//     },
//   },
// Mutation: {
//   async addWilder(_: any, { createWilderInput }: MutationAddWilderArgs) {
//     let wilder = await new WilderService().createWilder({
//       ...createWilderInput,
//     });

//       return wilder;
//     },
//   },
// };
