import * as React from "react"; // so that we can use JSX syntax
import { render, wait, fireEvent } from "@testing-library/react"; // testing helpers
import userEvent from "@testing-library/user-event";
import Login, { LOGIN_MUTATION } from "../../pages/login";
import { MockedProvider } from "@apollo/react-testing";
import { GraphQLError } from "graphql";
describe("Test Login page", () => {
  test("It calls grpahql mutation", async () => {
    const mock = [
      {
        request: {
          query: LOGIN_MUTATION,
          variables: {
            email: "mohammad_aabed@hotmail.com",
            password: "admin"
          }
        },
        newData: jest.fn(() => ({
          data: {
            login: {
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTE5ZDA0YTI0YWE5YTAwMDdkMTdjZGUiLCJpYXQiOjE1NzkwMzM0ODR9.MymegGVTN0Oez1pjbyb9QvwWLTn1G_amhgoWEtHOIUs",
              user: {
                id: "5e19d04a24aa9a0007d17cde"
              }
            }
          }
        }))
      }
    ];
    const { findByText, getByRole, getByPlaceholderText } = render(
      <MockedProvider addTypename={false} mocks={mock}>
        <Login />
      </MockedProvider>
    );
    const emailInput = getByPlaceholderText("Email");
    const passInput = getByPlaceholderText("Password");
    fireEvent.change(emailInput, {
      target: {
        value: "mohammad_aabed@hotmail.com"
      }
    });
    fireEvent.change(passInput, {
      target: {
        value: "admin"
      }
    });
    const button = await getByRole("button");
    fireEvent.click(button);
    const loginMutationMock = mock[0].newData;
    await wait(() => expect(loginMutationMock).toHaveBeenCalled());
  });
  // it("Error Message renders when graphql error is thrown", async () => {
  //   const mock = [
  //     {
  //       request: {
  //         query: LOGIN_MUTATION,
  //         variables: {
  //           email: "mohammad_aabed@hotmail.com",
  //           password: "adm"
  //         }
  //       },
  //       result: {
  //         errors: [
  //           new GraphQLError(
  //             "AuthenticationError: Invalid username or password"
  //           )
  //         ]
  //       }
  //     }
  //   ];

  //   const { findByText, getByRole, getByPlaceholderText } = render(
  //     <MockedProvider addTypename={false} mocks={mock}>
  //       <Login />
  //     </MockedProvider>
  //   );
  //   const emailInput = getByPlaceholderText("Email");
  //   const passInput = getByPlaceholderText("Password");
  //   fireEvent.change(emailInput, {
  //     target: {
  //       value: "mohammad_aabed@hotmail.com"
  //     }
  //   });
  //   fireEvent.change(passInput, {
  //     target: {
  //       value: "admin"
  //     }
  //   });
  //   const button = await getByRole("button");
  //   await fireEvent.click(button);
  //   const errorMessage = await findByText(/Error/i);
  //   console.log(errorMessage);
  // });
});
