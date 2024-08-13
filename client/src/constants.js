const getEnvVariable = (variableName, defaultValue = null) => {
  const envValue = process.env[variableName];
  if (envValue === undefined || envValue === '') {
    return defaultValue;
  }
  return envValue;
};

const generateEndpoints = () => {
  const serverEnv = getEnvVariable('REACT_APP_SERVER_ENV', 'local');
  const endpoints = {
    local: 'http://localhost:3002',
    dev: 'https://mydev.website.com',
    stg: 'https://mystaging.website.com',
    prd: 'https://myprod.website.com',
  };
  return endpoints[serverEnv] || endpoints.local;
};

export default generateEndpoints;
