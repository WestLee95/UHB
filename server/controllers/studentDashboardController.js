const db = require('../config/database');
exports.homepage = async (req, res) => {
    db.query('select * from hostels', (err, result) => {
        if (err) {
            return err;
        } else {
            res.render('./layouts/studentdashboard', {
                sampleData: result,
            })
        }
    })
}
exports.booking = async (req, res)=>{
    db.query('select hostels.HostelNo, hostels.HostelName, hostels.Capacity, hostels.Type, rooms.RoomNo from hostels left join rooms on hostels.HostelNo = rooms.HostelNo', (err, result) => {
        if (err) {
            return err;
        } else {
            res.render('./layouts/booking', {
                sampleData: result,
            })
        }
    })
}
exports.postBookingData = async (req ,res)=>{
        var hostelName = req.body.hostelName;
        var room = req.body.room;
        res.render('./layouts/application')
        console.log(hostelName);
        console.log(room);
}
exports.application = async (req, res)=>{
    db.query('select hostels.HostelNo, hostels.HostelName, hostels.Capacity, hostels.Type, rooms.RoomNo from hostels left join rooms on hostels.HostelNo = rooms.HostelNo', (err, result) => {
        if (err) {
            return err;
        } else {
            res.render('./layouts/application', {
                sampleData: result,
            })
        }
    })
}
exports.applicationDetails = async (req, res)=>{
    db.query('select * from applications', (err, result)=>{
        if (err) {
            return err;
        } else {
            res.render('./layouts/studentApplicationDetails', {
                sampleData: result
            })
        }
    })
}
exports.userDetails = async (req, res)=>{
    db.query('select * from users', (err, result)=>{
        if (err) {
            return err;
        } else {
            res.render('./layouts/studentdashboard', {
                sampleData: result
            })
        }
    })
}