import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const todoId = parseInt(id as string, 10)

  try {
    if (req.method === 'PUT') {
      const { title, completed } = req.body
      const updatedTodo = await prisma.todo.update({
        where: { id: todoId },
        data: { title, completed },
      })
      res.json(updatedTodo)
    } else if (req.method === 'DELETE') {
      await prisma.todo.delete({
        where: { id: todoId },
      })
      res.status(204).end()
    } else {
      res.status(405).json({ message: 'Method not allowed' })
    }
  } catch (error) {
    console.error('Error in todo API:', error)
    res.status(500).json({ message: 'Internal server error', error: error instanceof Error ? error.message : String(error) })
  }
}
