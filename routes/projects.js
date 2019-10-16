
const express = require('express');
const data = require('../data.json');
const projectData = data.projects;

const router = express.Router();

router.get('/:id', (req, res) => {
    // Shift project_id, because array starts at 0
    const project_id = parseInt(req.params.id)-1;
    res.locals.project = projectData[project_id];
    res.locals.title = projectData[project_id].project_name;
    res.locals.description = projectData[project_id].description;
    res.locals.technologies = projectData[project_id].technologies;
    res.locals.live_link = projectData[project_id].live_link;
    res.locals.github_link = projectData[project_id].github_link;
    res.locals.image1 = projectData[project_id].image_urls[1];
    res.locals.image2 = projectData[project_id].image_urls[2];
    res.locals.image3 = projectData[project_id].image_urls[3];
    res.render('project', {title: res.locals.title,
        description: res.locals.description,
        technologies: res.locals.technologies,
        live_link: res.locals.live_link,
        github_link: res.locals.github_link,
        image1: res.locals.image1,
        image2: res.locals.image2,
        image3: res.locals.image3
    });
});

module.exports = router;