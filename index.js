const nodesdk = require('@gaia-pipeline/nodesdk');

function DoSomethingAwesome(args) {
    console.error('This output will be streamed back to gaia and will be displayed in the pipeline logs.');

    // An error occurred? Throw it back so gaia knows that this job failed.
    // throw new Error('My error message');
}

function DoSomethingAwesome2(args) {
    console.log(111);
    console.error(222)

    // An error occurred? Throw it back so gaia knows that this job failed.
    // throw new Error('My error message');
}

function PrintArgs(args) {
    for (let i = 0; i < args.length; i++) {
        console.error('Key: ' + args[i].key + '; Value: ' + args[i].value);
    }
}

// Serve
try {
    nodesdk.Serve([{
            handler: PrintArgs,
            title: 'Print Arguments',
            description: 'This job prints out all given arguments.',
            args: [
                {
                    // This will use a textfield in the UI. You can also use
                    // "textarea", "boolean" and "vault".
                    type: 'vault',
                    key: 'dbpassword'
                }
            ]
    },{
        handler: DoSomethingAwesome2,
        title: 'DoSomethingAwesome2',
        description: 'This job does something awesome2.'
    },{
        handler: DoSomethingAwesome,
        title: 'DoSomethingAwesome',
        description: 'This job does something awesome.'
    }]);
} catch (err) {
    console.error(err);
}
