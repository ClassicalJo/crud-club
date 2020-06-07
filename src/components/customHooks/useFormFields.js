/*eslint-disable no-useless-escape*/
import { useState } from 'react'

export const useFormFields = () => {
    let [name, setName] = useState("")
    let [shortName, setShortname] = useState("")
    let [tla, setTLA] = useState("")
    let [address, setAddress] = useState("")
    let [phone, setPhone] = useState("")
    let [website, setWebsite] = useState("")
    let [email, setEmail] = useState("")
    let [founded, setFounded] = useState("")
    let [clubColors, setClubColors] = useState("")
    let [venue, setVenue] = useState("")

    let fields = {
        name: {
            setter: setName,
            label: "Full name",
            value: name,
            pattern: "^[A-Z][A-Za-z ,.'-]+$"
        },
        shortName: {
            setter: setShortname,
            label: "Shortname",
            value: shortName,
            pattern: "^[A-Z][a-z]+$"
        },
        tla: {
            setter: setTLA,
            label: "TLA",
            value: tla,
            pattern: "^[A-Z]{3}$"
        },
        address: {
            setter: setAddress,
            label: "Address",
            value: address,
            pattern: "^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$"
        },
        phone: {
            setter: setPhone,
            label: "Phone",
            value: phone,
            pattern: "^[0-9]+$"
        },
        website: {
            setter: setWebsite,
            label: "Website",
            value: website,
            pattern: "^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$"
        },
        email: {
            setter: setEmail,
            label: "E-mail",
            value: email,
            pattern: "^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+"
        },
        founded: {
            setter: setFounded,
            label: "Year of founding",
            value: founded,
            pattern: "^[0-9]{4}"
        },
        clubColors: {
            setter: setClubColors,
            label: "Colors of the club",
            value: clubColors,
            pattern: "^[A-Z][A-Za-z ,.'-]+$"
        },
        venue: {
            setter: setVenue,
            label: "Venue",
            value: venue,
            pattern:"^[A-Z][A-Za-z ,.'-]+$"
        },
    }
    return fields
}

export const useErrorFields = () => {
    let [name, setName] = useState(false)
    let [shortName, setShortname] = useState(false)
    let [tla, setTLA] = useState(false)
    let [address, setAddress] = useState(false)
    let [phone, setPhone] = useState(false)
    let [website, setWebsite] = useState(false)
    let [email, setEmail] = useState(false)
    let [founded, setFounded] = useState(false)
    let [clubColors, setClubColors] = useState(false)
    let [venue, setVenue] = useState(false)

    return {
        name: {
            value: name,
            setter: setName
        },
        shortName: {
            value: shortName,
            setter: setShortname
        },
        tla: {
            value: tla,
            setter: setTLA
        },
        address: {
            value: address,
            setter: setAddress
        },
        phone: {
            value: phone,
            setter: setPhone
        },
        website: {
            value: website,
            setter: setWebsite
        },
        email: {
            value: email,
            setter: setEmail
        },
        founded: {
            value: founded,
            setter: setFounded
        },
        clubColors: {
            value: clubColors,
            setter: setClubColors
        },
        venue: {
            value: venue,
            setter: setVenue
        },
    }
}
