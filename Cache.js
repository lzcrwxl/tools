/**
 * 存储localStorage
 */
const setStore = (name, content) =>
{
    if (!name) return false;
    typeof content !== 'string' && (content = JSON.stringify(content));
    window.localStorage.setItem(name, content);
    return true;
};
/**
 * 获取localStorage
 */
const getStore = (name) =>
{
    if (!name) return false;
    return window.localStorage.getItem(name) || false;
};
/**
 * 删除localStorage
 */
const removeStore = (name) =>
{
    if (!name) return false;
    window.localStorage.removeItem(name);
    return true;
};
/**
 * 存储sessionStorage
 */
const setSession = (name, content) =>
{
    if (!name) return false;
    typeof content !== 'string' && (content = JSON.stringify(content));
    window.sessionStorage.setItem(name, content);
    return true;
};
/**
 * 获取sessionStorage
 */
const getSession = (name) =>
{
    if (!name) return false;
    return window.sessionStorage.getItem(name) || false;
};
/**
 * 删除sessionStorage
 */
const removeSession = (name) =>
{
    if (!name) return false;
    window.sessionStorage.removeItem(name);
    return true;
};

export {
    setStore,
    getStore,
    removeStore,
    setSession,
    getSession,
    removeSession
}