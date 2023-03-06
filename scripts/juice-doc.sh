#! /bin/bash
#
# Documents a Juicebox protocol extension using `forge doc`.
# Update JUICE_DOCS_DIR before running.
# Run from root directory of extension which you wish to document.

JUICE_DOCS_DIR="/home/filipv/Workspace/juice-docs/"
API_DIR="extensions"
CURRENT_DIR=$(basename $(pwd))

# Generate forge docs
forge doc

# Make output directory, move forge docs into it
mkdir -p "$JUICE_DOCS_DIR"/docs/dev/api/"$API_DIR"/"$CURRENT_DIR"
mv docs/src/* "$JUICE_DOCS_DIR"/docs/dev/api/"$API_DIR"/"$CURRENT_DIR"

# Add new filepath relative to docs root directory
cd "$JUICE_DOCS_DIR"/docs/dev/api/"$API_DIR"/"$CURRENT_DIR"
grep -rl '](/' | xargs sed -i "s/](\//](\/dev\/api\/"$API_DIR"\/$CURRENT_DIR\//g"

# Remove undesired files from forge docs
rm -rf SUMMARY.md contracts/forge-test contracts/scripts

# Add frontmatter to README
echo -e "---\ntitle: $CURRENT_DIR\n---\n$(cat README.md)" > README.md

# Delete auto-generated README files from forge doc
find -type f -name README.md ! -path './README.md' -delete

# Move enums, interfaces, libraries, and structs out from the contracts directory, update links, and create Docusaurus category files and READMEs for each.
for DIR in "enums" "interfaces" "libraries" "structs"
do
  mv contracts/$DIR .
  echo -e "{\n  \"label\": \"${DIR^}\"\n}" > $DIR/_category_.json
	echo -e "---\ntitle: ${DIR^}\n---\n\nimport DocCardList from '@theme/DocCardList';\n\n<DocCardList/>" > $DIR/README.md
  grep -rl "contracts/$DIR" | xargs sed -i "s/](\/dev\/api\/$API_DIR\/$CURRENT_DIR\/contracts\/$DIR/](\/dev\/api\/$API_DIR\/$CURRENT_DIR\/$DIR/g"
done

# Create Docusaurus category files and READMEs for contracts and abstract.
echo -e "{\n  \"label\": \"Contracts\"\n}" > contracts/_category_.json
echo -e "---\ntitle: Contracts\n---\n\nimport DocCardList from '@theme/DocCardList';\n\n<DocCardList/>" > contracts/README.md
echo -e "{\n  \"label\": \"Abstract\",\n  \"position\": 1\n}" > contracts/abstract/_category_.json
echo -e "---\ntitle: Abstract\n---\n\nimport DocCardList from '@theme/DocCardList';\n\n<DocCardList/>" > contracts/abstract/README.md

# Move documents out of .sol directories and update links
for SOL in $(find ~+ -name *.sol -type d)
do
  cd $SOL
  mv ./* ..
  rm -rf $SOL
done
cd "$JUICE_DOCS_DIR"/docs/dev/api/"$API_DIR"/"$CURRENT_DIR"
grep -rl '/\w*.sol/' | xargs sed -i 's/\/\w*\.sol\//\//g'

# Remove forge filetype prefixes and update links
for PREFIX in "contract" "enum" "struct"
do
	for FILE in $(find -type f -name "$PREFIX\.*")
	do
		mv $FILE ${FILE/\/$PREFIX\.//}
	done
	grep -rl "/$PREFIX\..*\." | xargs sed -i "s/\/$PREFIX\.\([^\.]*\)/\/\1/g"
done

# Add backticks to inheritance
find -type f -name "*.md" -exec sed -i "/\*\*Inherits:\*\*/{ n; s/\[\(\w*\)\]/[\`\1\`]/g ; s/^\([A-Za-z0-9]*\)$/\`\1\`/g }" {} +;

# find -type f -name "*.md" -exec sed -n "/\*\*Inherits:\*\*/{ n ; s/, \([A-Za-z0-9]*\),/\, \`\1\`,/gp }" {} +;
