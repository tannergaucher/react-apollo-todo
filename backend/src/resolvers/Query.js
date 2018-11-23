const { forwardTo } = require('prisma-binding')

const Query = {
  todo: forwardTo('db'),
  todoes(parent, args, ctx, info) {
    return ctx.db.query.todoes(
      {
        where: { id: args.id }
      },
      info
    )
  }
}

module.exports = Query
