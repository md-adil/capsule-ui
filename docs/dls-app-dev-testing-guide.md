# **Scope:**

While developing components for DLS, we should make sure the components are working as expected in the app in which we are using it. The process of developing the component, getting your PR merged and then testing it in the app by upgrading the version of design library can be lengthy. So we can setup a private local npm registry which will help to test our components locally before raising your final PR and getting it merged.

There are various ways to do so, we are going to use [Verdaccio](https://verdaccio.org/docs/what-is-verdaccio) here.

**Steps to setup:**

1. Run the below command to start Verdaccio server. For first time, it will ask to install Verdaccio, enter 'y' and proceed.

   `npx verdaccio`

This will start the server at `http://localhost:4873`. Open this in your browser and you should see this -

![Screenshot 2024-01-23 at 16.21.18.png](https://bajajfinservhealth.azureedge.net/png/test/36290fe8-f419-4581-9abe-8c226b1c94e5.png)

2. Next, we need to change the default npm registry to `http://localhost:4873`. Run the below command to change it -

   `yarn config set registry http://localhost:4873`

3. Now, we need to login to our local npm account. Run this -

   `yarn login`

This will ask for username and email. Use `test` and `test@company.com` for username and email respectively.

![Screenshot 2024-01-23 at 19.58.37.png](https://bajajfinservhealth.azureedge.net/png/test/485e1113-8716-4259-97f9-bba46e2af23b.png)

4. Next, we need to publish this package to our local registry. At the root level of the [design-language](https://dev.azure.com/BFHL/HealthRX%20website/_git/design-language) project, run -

`yarn publish`

This will ask for a new version of the package. Provide a new version. It will also ask for password. Type `test` as the password here. The package should get published.

![Screenshot 2024-01-23 at 19.59.03.png](https://bajajfinservhealth.azureedge.net/png/test/66725500-f007-4894-80aa-a42231659082.png)

Now go to `http://localhost:4873` and refresh it. You should see the package got published with the new version specified above.

![Screenshot 2024-01-23 at 19.59.24.png](https://bajajfinservhealth.azureedge.net/png/test/5ee42b74-1905-4c0c-84e9-6ecd542f8df5.png)

5. Now, go to HRx app project and run the below command to install the latest package -

`yarn add design-rx`

Now, import your component and test them in your flow.

**Note:**

To revert back to default npm registry, run the below command -

` yarn config set registry https://registry.npmjs.org`
