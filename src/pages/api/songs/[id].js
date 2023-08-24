import { songs } from '../../../../songs'

export default function handler(req, res) {
    let id = req.query.id;

    let song = songs.find((p) => p.id == id)
    if (song) {
        res.status(200).json(song)
    } else {
        res.status(400).json({ err: 'there is no product' })
    }

}
