import { songs } from '../../../../songs'

export default function handler(req, res) {
    res.status(200).json(songs)
}
