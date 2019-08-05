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

    app.get("/api/:shortid", async (req, res)=>{
        const shortid = await req.params.shortid;
        const shorturlobject = await Links.findOne({shortlinkid:shortid});
        res.json(shorturlobject.originalLink);
    });
};