const shortid = require("shortid");
const Links = require("../models/Links.model");



module.exports=app=>{
    app.get("/api/links",async (req,res)=>{
        const FoundLinks = await Links.find().sort({"createdDate":-1});
        res.json(FoundLinks);
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
        .then(Link=>res.json(Link))
        .catch(err=>res.send(err));
    });

    app.get("/:shortid", async (req, res)=>{
        const shortid = await req.params.shortid;
        const shorturlobject = await Links.findOne({shortid});
        res.status(301).redirect(shorturlobject.originalPassedLink);
    });
};