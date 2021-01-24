const nodesdk = require('@gaia-pipeline/nodesdk');

function DoSomethingAwesome(args) {
    console.error('This output will be streamed back to gaia and will be displayed in the pipeline logs.');

    // An error occurred? Throw it back so gaia knows that this job failed.
    // throw new Error('My error message');
}

function DoSomethingAwesome2(args) {
    console.log(111);

    // An error occurred? Throw it back so gaia knows that this job failed.
    // throw new Error('My error message');
}

// Serve
try {
    nodesdk.Serve([{
        handler: DoSomethingAwesome2,
        title: 'DoSomethingAwesome2',
        description: 'This job does something awesome2.'
    }，{
        handler: DoSomethingAwesome,
        title: 'DoSomethingAwesome',
        description: 'This job does something awesome.'
    }]);
} catch (err) {
    console.error(err);
}
