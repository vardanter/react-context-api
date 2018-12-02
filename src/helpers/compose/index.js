const compose = (...wrappers) => {
    return (WrappedComponent) => {
        return wrappers.reduceRight((current, wrapper) => {
            return wrapper(current);
        }, WrappedComponent);
    }
};

export default compose;