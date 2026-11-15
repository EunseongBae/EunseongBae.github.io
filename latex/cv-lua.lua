-- function Header(el)
--   if el.level == 2 then
--     local text = pandoc.utils.stringify(el.content)
--     return pandoc.RawBlock("latex", "{\\Large " .. text .. "}")
--   end
-- end

function Header(el)
  if el.level == 2 then
    local text = pandoc.utils.stringify(el.content)
    return pandoc.RawBlock("latex", "\\subsection*{" .. text .. "}")
  end
end

function Span(el)
  if el.classes:includes("web-only") then
    return {}
  end

  return el
end