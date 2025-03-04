export default async (scriptUrl, options) => {
    const { serviceWorker: serviceWorkerContainer } = navigator
    const registration = await serviceWorkerContainer.register(scriptUrl, options)
    await registration.update()
    const { active, installing, waiting } = registration
    const next = installing || waiting
    if (active && !next) {
        if (!serviceWorkerContainer.controller) { // is null if the request is a force refresh (shift+refresh)
            location.reload() // this is most clearly way to delegate control to active ServiceWorker
            return new Promise(() => {}) // wait while reloading
        }
        return Promise.resolve(active)
    }
    return new Promise((resolve) => {
        const handler = () => {
            if (next.state === 'activated' && next === serviceWorkerContainer.controller) {
                next.removeEventListener('statechange', handler)
                resolve(next)
            }
        }
        next.addEventListener('statechange', handler)
    })
}
