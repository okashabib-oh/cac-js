let keys = document.getElementById('keys')

window.addEventListener('keydown', (e) =>{
    console.log(e);

    keys.innerHTML = `
        <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        <div class="flex flex-col pb-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Key</dt>
            <dd class="text-lg font-semibold text-gray-200">${e.key}</dd>
        </div>
        <div class="flex flex-col py-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Code</dt>
            <dd class="text-lg font-semibold text-gray-200">${e.code}</dd>
        </div>
        <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Key Code</dt>
            <dd class="text-lg font-semibold text-gray-200">${e.keyCode}</dd>
        </div>
        </dl>
    `
})