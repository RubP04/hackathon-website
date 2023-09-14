"use client";
import { useState } from "react";
import Filters from "@/components/admin/Filters";
import Toolbar from "@/components/admin/dashboards/Toolbar";
import Title from "../Title";
import Table from "./Table";
import volunteerList from "../../../../cypress/fixtures/Volunteers.json";
import { FILTERS, HEADERS, TAGS } from "@/data/admin/Volunteers";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState(volunteerList);
  const [input, setInput] = useState({
    input: "",
  });
  const [filters, setFilters] = useState(FILTERS);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Volunteers" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setVolunteers}
          objects={volunteers}
          input={input.input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={TAGS}
        setObjects={setVolunteers}
        objects={volunteers}
        filters={filters}
        file="VOLUNTEERS"
        headers={headers}
      />
      <Table
        headers={headers}
        empty="No Volunteers Available"
        setHeaders={setHeaders}
        setObjects={setVolunteers}
        objects={volunteers}
      />
    </div>
  );
};

export default Volunteers;