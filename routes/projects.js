
const express = require('express');
const data = require('../data.json');
const projectData = data.projects;

const router = express.Router();

/* router.get('/', (req, res) => {
    const id = req.params.id;
    console.log('projectRoute / used');
    if (!id) {
        res.redirect('../');
    }
}); */

router.get('/:id', (req, res) => {
    console.log('projectRoute used');
    const project_id = parseInt(req.params.id)-1;
    console.dir(project_id);
    res.locals.project = projectData[project_id];
    res.locals.title = projectData[project_id].project_name;
    res.locals.description = projectData[project_id].description;
    res.locals.technologies = projectData[project_id].technologies;
    res.locals.image1 = projectData[project_id].image_urls[1];
    res.locals.image2 = projectData[project_id].image_urls[2];
    res.locals.image3 = projectData[project_id].image_urls[3];
    res.render('project', {title: res.locals.title,
        description: res.locals.description,
        technologies: res.locals.technologies,
        image1: res.locals.image1,
        image2: res.locals.image2,
        image3: res.locals.image3
    });
});

module.exports = router;