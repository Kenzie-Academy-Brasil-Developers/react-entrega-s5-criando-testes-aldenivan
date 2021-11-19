import { render, fireEvent, screen } from '@testing-library/react';

import Search from "../../components/Search"

describe("Input Component", () => {

    test("Should be to able to render an Input", () => {

        render(
            <Search />
        );

        expect(screen.getByPlaceholderText("Insira o CEP")).toBeInTheDocument();
    }) 


    test("Should be to able to search CEP", () => {

        render(
            <Search />
        );

        const cepField = screen.getByPlaceholderText("Insira o CEP");
        const buttonField = screen.getByText("Buscar pelo CEP");

        fireEvent.change(cepField, {
            target: {value: "81490418"}
        });
        fireEvent.click(buttonField);
        

        expect(cepField).toHaveValue(81490418)
    }) 
})
