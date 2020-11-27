import { Request, Response } from 'express'
import {Link} from '../models/link'

const links : Link[] = []
let proxId = 1

function generateCode() {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    
    for (let i=0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text
}

const getLink = (req: Request, res: Response) : void => {
    const code = req.params.code as string;
    const link = links.find(item => item.code === code)
    link ? res.json(link) : res.sendStatus(404)
}

const postLink = (req: Request, res: Response) : void => {
    const link = req.body as Link;
    link.id = proxId++
    link.code = generateCode()
    link.hits = 0
    
    links.push(link)
    
    res.status(201).json(link)
}

const getStats = (req: Request, res: Response) : void => {
    const code = req.params.code as string
    const index = links.findIndex( item => item.code === code )
    if (index === -1) {
      res.sendStatus(404)
    } else {
      links[index].hits++
      res.json(links[index])
    }
}

export default {
    getLink,
    postLink,
    getStats
}