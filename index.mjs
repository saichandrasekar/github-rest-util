import { Octokit, App } from "octokit";

const octokit = new Octokit({
  auth: 'github_chane'
});

try {

	await octokit.request('POST /repos/{owner}/{repo}/issues', {
	  owner: 'chane',
	  repo: 'chane',
	  title: 'Found a bug',
	  body: 'I\'m having a problem with this.',
	  assignees: [
		'chane'
	  ],
	  milestone: null,
	  labels: [
		'bug'
	  ]	  
	})


  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
	  owner: "chane",
	  repo: "chane",
	});

  console.log(`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`)
  
  console.log(result.data)
  console.log(result.data.length)
} catch (error) {
  console.log(`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`)
}