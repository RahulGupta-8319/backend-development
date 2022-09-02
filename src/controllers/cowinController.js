let axios = require("axios");
const { options } = require("../routes/route");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByDistrictId = async function (req, res) {

    try {
        let distId = req.query.district_id
        let date = req.query.date

        console.log(distId, date);

        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${distId}&date=${date}`
        }

        let result = await axios(options)
        res.status(200).send({ msg: result.data })

    } catch (error) {
        res.status(500).send({ msg: error.message })
    }

}

let getWeather = async function (req, res) {
    let place = req.query.q
    let id = req.query.appid

    let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${id}`
    }
    let result = await axios(options)

    //------for temp only---------//

    let data = result.data.main
    console.log(result.data);
    res.status(200).send({ msg: data })

}

//-------------------------------------------2-------------------------------------------------------------//
let sortCities = async function (req, res) {
    try {
        const cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let citiesData = []

        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=fba376777c7ba0735379b63f439e4837`)

            console.log(resp.data.main.temp);
            obj.temp = resp.data.main.temp
            citiesData.push(obj)

        }

        let sorted = citiesData.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted);
        res.status(200).send({ status: true, data: sorted })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }



}

//------------------------------------------------3----------------------------------------------//

let memes = async function (req, res) {

    let id = req.query.template_id
    let text0 = req.query.text0
    let text1 = req.query.text1
    let username = req.query.username

    let password = req.query.password



    try {
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,

        }
        let result = await axios(options)
        res.send({ data: result.data })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }

}




module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrictId = getByDistrictId
module.exports.getWeather = getWeather
module.exports.sortCities = sortCities
module.exports.memes = memes