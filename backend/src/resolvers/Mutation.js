const Mutations = {
  async createTodo(parent, args, ctx, info) {
    //todo: check if logged in
    const todo = await ctx.db.mutation.createTodo(
      {
        data: { ...args }
      },
      info
    )
    console.log('create todo mutation', todo)
    return todo
  },
  async deleteTodo(parent, args, ctx, info) {
    const where = { id: args.id }

    const item = await ctx.db.query.todo(
      {
        where: { id: args.id }
      },
      `{ id }`
    )

    return ctx.db.mutation.deleteTodo({ where }, info)
  },
  updateTodo(parent, args, ctx, info) {
    //take a copy of updates
    const updates = { ...args }
    //remove ID from the updates
    delete updates.id
    //run the update method
    return ctx.db.mutation.updateTodo(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    )
  }
}

module.exports = Mutations
