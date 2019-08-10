const shortid = require("shortid");
const Links = require("../models/Links.model");



module.exports=app=>{
    app.get("/",async (req,res)=>{
        const FoundLinks = await Links.find().sort({"createdDate":-1});
        res.send(FoundLinks);
    });
    app.get("/api/links",async (req,res)=>{
        const FoundLinks = await Links.find().sort({"createdDate":-1});
        res.send(FoundLinks);
    });

    app.post("/api/create", async (req, res) => {
        const newAlias = await shortid.generate();
        const NewLink = await new Links({
            originalLink: req.body.originalLink,
            identity: req.body.identity,
            shortlinkid: newAlias,
            createdDate: Date.now()
        });
        Links.create(NewLink)
        .then(Link=>res.status(301).redirect("/"))
        .catch(err=>res.send(err));
    });

    app.get("/api/:shortid", (req, res)=>{
        const shortid = req.params.shortid;
        Links.findOne({
            shortlinkid: shortid
        }).then(shorturlobject => res.json(shorturlobject.originalLink)).catch(err => {
            res.send("err")
        })
    });

// if (!shorturlobject) {
//     console.log(err);
//     res.status(404);
// } else if (shorturlobject) {
//     console.log(shorturlobject);
//     res.json(shorturlobject.originalLink);
// }

};