import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const todos = await prisma.todo.findMany()
      res.status(200).json(todos)
    } else if (req.method === 'POST') {
      const { title } = req.body
      if (!title) {
        return res.status(400).json({ message: 'Title is required' })
      }
      const todo = await prisma.todo.create({
        data: { title },
      })
      res.status(201).json(todo)
    } else {
      res.status(405).json({ message: 'Method not allowed' })
    }
  } catch (error) {
    console.error('Error in todos API:', error)
    res.status(500).json({ message: 'Internal server error', error: error instanceof Error ? error.message : String(error) })
  }
}
