const express = require('express');
const router = express.Router();
// const users = require('../../Users');
const jobs = require('../../jobs');
let currentJobId = 8;

/**
 * @route GET api/jobs/
 * @desc Retrives all the jobs match with the userId
 **/
router.get('/', (req, res) => {
  const userId = parseInt(req.body.userId);
  console.log(userId);
  const targetJobs = jobs.filter((job) => job.clientId === userId);
  return res.json(targetJobs);
});
/**
 * @route POST api/jobs/
 * @desc Creates a new job post
 **/
router.post('/', (req,res) => {
  if (req.body.jobTitle === "" || req.body.jobDescription === "") {
    return res.status(400).json({msg: "Bad request: task name cannot be empty of null"});
  }
  const newJobPost = {
    id: currentJobId,
    clientId: req.params.userId,
    category: req.body.category,
    jobTitle: req.body.jobTitle,
    jobDescription: req.body.jobDescription,
    jobDate: req.body.jobDate,
    postCreated: req.body.postCreated,
    applicants:[],
    status:"searching"
  };
  jobs.push(newJobPost);
  currentJobId++;
  return res.json(jobs);
});

/**
 * @route PUT api/jobs/
 * @desc modifying data with update requests
 */
router.put('/', (req,res) => {
  if (req.body.action == "applyingJob") {
    let userId = parseInt(req.body.clientId);
    let jobId = parseInt(req.body.jobId);
    let requirePrice = parseInt(req.body.price);
    let jobList = jobs.map((job) => {
      if (job.jobId == jobId) {
        let applicants = job.applicants;
        applicants.push({id: userId, price: requirePrice});
        job.applicants = applicants;
      };
      return job;
    });
    return res.json({result: "Success", temp: jobs})
  } else if (req.body.action == "choosing applicant") {
    let userId = req.body.jobSeekerId;
    let jobId = req.body.jobId;
    jobs.map((job) => {
      if (job.jobId == jobId) {
        job.jobProvider = userId;
        job.status="confirmed";
      };
      return job;
    });
    return res.json({result: "Success", temp: jobs})
  } else if (req.body.action == "completeJob") {
    let jobId = req.body.jobId;
    jobs.map((job) => {
      if (job.jobId == jobId) {
        job.status= "completed";
      }
      return job;
    });
    return res.json({result: "Success", temp: jobs})
  }
});

module.exports = router;