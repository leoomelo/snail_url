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
    res.send('GET link')
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
    res.send('GET stats')
}

export default {
    getLink,
    postLink,
    getStats
}